const { GuestInfoTC } = require('../models/guestInfo.model');
require('../resolvers/GuestInfo.resolver');

const GuestInfoQuery = {
  guestInfoById: GuestInfoTC.getResolver('findById'),
  guestUpdate: GuestInfoTC.getResolver('findById'),
};

module.exports = {
  GuestInfoQuery,
};
