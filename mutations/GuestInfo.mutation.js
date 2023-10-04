const { GuestInfoTC } = require('../models/guestInfo.model');
const { MessageTC } = require('../models/sms.model');
require('../resolvers/GuestInfo.resolver');

const GuestInfoMutation = {
  guestInfoCreateOne: GuestInfoTC.getResolver('createOne'),
  guestInfoCreateMany: GuestInfoTC.getResolver('createMany'),
  guestUpdateById: GuestInfoTC.getResolver('updateGuest'),
  sendUpdateToGuest: MessageTC.getResolver('sendUpdateToGuest'),
  sendUpdateToAllGuests: MessageTC.getResolver('sendUpdateToAllGuests'),
};

module.exports = {
  GuestInfoMutation,
};
