var bunyan = require("bunyan"),
  bformat = require("bunyan-format"),
  formatOut = bformat({ outputMode: "long" });

var log = bunyan.createLogger({
  name: "LetServU",
  src: true,
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: "info",
      stream: formatOut,
    },
    {
      level: "error",
      path: "debug.log",
    },
  ],
});

module.exports = log;
