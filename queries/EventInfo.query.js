const { EventInfoTC } = require('../models/eventInfo.model');
require('../resolvers/EventInfo.resolver');

const EventInfoQuery = {
  eventInfoById: EventInfoTC.getResolver('findById'),
};

module.exports = {
  EventInfoQuery,
};
