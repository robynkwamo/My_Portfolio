const { GuestInfoTC } = require('../models/guestInfo.model');
const { MessageTC } = require('../models/sms.model');
require('../resolvers/GuestInfo.resolver');

const GuestInfoMutation = {
  guestInfoCreateOne: GuestInfoTC.getResolver('createOne'),
  guestInfoCreateMany: GuestInfoTC.getResolver('createMany'),
  sendUpdateToGuest: MessageTC.getResolver('sendUpdateToAllGuest'),
};

module.exports = {
  GuestInfoMutation,
};
