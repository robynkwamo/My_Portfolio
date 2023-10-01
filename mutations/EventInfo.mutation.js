const { EventInfoTC } = require('../models/eventInfo.model');
require('../resolvers/EventInfo.resolver');

const EventInfoMutation = {
  eventInfoCreateOne: EventInfoTC.getResolver('createOne'),
  //   companyInfoCreateMany: CompanyInfoTC.getResolver("createMany"),
};

module.exports = {
  EventInfoMutation,
};
