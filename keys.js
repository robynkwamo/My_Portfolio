// key file for deployment and development constant

const devKeys = require('./keys.dev.js');
const prodKeys = require('./keys.prod.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = prodKeys;
} else {
  module.exports = devKeys;
}
