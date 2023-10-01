// mogoDB import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const sticky = require('sticky-session');
const cluster = require('cluster');
const log = require('./serverLog');
const helmet = require('helmet');
const timeout = require('connect-timeout');
const xss = require('xss-clean');
const OpenApiValidator = require('express-openapi-validator');
const url = require('whatwg-url');
const path = require('path');
const { createHandler } = require('graphql-http/lib/use/express');
const fileUpload = require('express-fileupload');

let graphqlSchema = require('./schemas/index');

if (process.env.NODE_ENV === undefined) {
  require('dotenv').config();
}

const config = require('./keys');

const app = express();
const server = require('http').createServer(app, (req, res) => {
  res.end(`worker: ${cluster.worker.id}`);
});
const Logger = require('./utils/newLogger');

const newLogger = new Logger();
mongoose.set('strictQuery', false);
// Setting context for the graphql HTTP requst
const extensions = ({ context }) => ({
  runTime: Date.now() - context.startTime,
});

const port = process.env.NODE_ENV === 'test' ? process.env.PORT : process.env.PORT || config.PORT || 5000;

const options = {
  workers: process.env.WEB_CONCURRENCY || 1,
  env: process.env.NODE_ENV,
};

const uri = process.env.DATABASE_URL;

//app.use(stHttpLoggerMiddleware)
app.use(helmet.hidePoweredBy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(timeout('15s'));
app.enable('trust proxy');
app.use(express.json({ limit: '10kb' }));
// Data Sanitization against XSS attacks
app.use(xss());
app.use(fileUpload());

// Another bunch of middleswares to authenticate http requests
// Sanitizing data to prevent code injection attacks
app.use(mongoSanitize());

// Nodemailer import
var nodemailer = require('nodemailer');
const creds = require('./config');

// Nodemailer credential setup
app.use(cors());
app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// const clusterOptions = {
//   workers: process.env.WEB_CONCURRENCY || 1,
//   env: process.env.NODE_ENV,
// };

app.use(
  'api/*',
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
  })
);

app.use((err, req, res, next) => {
  // 7. Customize errors
  log.error('OpenApi Error', err); // dump error to console for debug
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

// code for master / worker prossesses. using Sticking to fork worker processes
if (!sticky.listen(server, port, options)) {
  log.info(`Master ${process.pid} is running`);

  server.once('listening', () => {
    log.info(`Server is running on port: ${port}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    if (signal) {
      newLogger.warn(`Worker ${worker.process.pid} was killed by signal: ${signal}`);
      log.warn(`Worker ${worker.process.pid} was killed by signal: ${signal}`);
    } else if (code !== 0) {
      newLogger.warn(`Worker ${worker.process.pid} exited with error code: ${code}`);
      log.warn(`Worker ${worker.process.pid} exited with error code: ${code}`);
    } else {
      log.warn('Worker success!');
    }
  });
} else {
  log.info(`Worker ${process.pid} started`);
}

// Connect to Mongo DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
});

// Log Message once the connection is open
const { connection } = mongoose;
connection.once('open', () => {
  log.info('MongoDB database connection established successfully');
});

// Log Error if error
connection.on('error', (err) => {
  newLogger.error(`Mongo Connection error: ${err}`);
  log.error('Mongo Connection error:', err);
});

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  //like our main.js file, or main.css file !
  app.use(express.static(path.join(__dirname, 'client/build')));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.use('/', (req, res, next) => {
  try {
    log.info('------- Request Coming From -------', req?.headers?.host);
    const regex = /\/(api|graphql)\b/i;
    if (regex.test(req.url)) {
      log.info('------- Sending to request to internal api ----------');
      next();
    } else {
      const check = {
        uptime: process.uptime(),
        responseTime: process.hrtime(),
        message: 'OK',
        timestamp: Date.now(),
      };
      return res.status(200).send(check);
    }
  } catch (error) {
    log.error('Error With the Home endpoint', error);
  }
});

app.all('/graphql', (req, res, next) => {
  createHandler({ schema: graphqlSchema, context: { startTime: Date.now(), request: req }, extensions })(
    req,
    res,
    next
  );
});

app.use(fileUpload());

const guestUpload = require('./routes/guestUpload.route');
app.use('/api/guest/', guestUpload);

// Handle error
process
  .on('uncaughtException', (err) => {
    log.error(`There was an uncaught error caused by this process  ${process.pid}`, err);
    process.exit(1); //mandatory (as per the Node.js docs)
  })
  .on('UnhandledPromiseRejectionWarning', (err) => {
    log.error(`There was an UnhandledPromiseRejectionWarning error caused by this process  ${process.pid}`, err);
    process.exit(1); //mandatory (as per the Node.js docs)
  });
// $ lsof -i tcp:3000
// $ kill -9 PID

module.exports = app;
