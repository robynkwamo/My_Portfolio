const SimpleHMACAuth = require('simple-hmac-auth');
// const log = require("./serverLog");
const apiConfig = new SimpleHMACAuth.Client('API_KEY', 'SAMPLE_API_KEY', {
  verbose: true,
  host: 'localhost',
  port: 5005,
  ssl: false,
});

export default apiConfig;
