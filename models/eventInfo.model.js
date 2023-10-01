const mongoose = require('mongoose');

const { composeMongoose } = require('graphql-compose-mongoose');

const Schema = mongoose.Schema;

const eventInfo = new Schema(
  {
    eventName: { type: String, default: '', required: true, maxLength: 100 },
    ownerFirstName: { type: String, default: '', required: true },
    ownerLastName: { type: String, default: '', required: true },
    ownerPhoneNumber: { type: Number, default: '', required: true },
    description: { type: String, default: false, required: false },
    slug: { type: String, default: '', required: true, maxLength: 100 },
    email: { type: String, default: '', required: true, unique: true },
    eventLocation: {
      addressLine1: { type: String, default: '' },
      addressLine2: { type: String, default: '' },
      city: { type: String, default: '' },
      state: { type: String, default: '' },
      zipCode: { type: String, default: '' },
      country: { type: String, default: '' },
    },
    eventDate: { type: Date, required: '' },
    isDeleted: { type: Boolean, default: false, required: false },
  },
  {
    timestamps: true,
  }
);

const EventInfoModel = mongoose.model('eventInfo', eventInfo, 'eventInfo');
const EventInfoTC = composeMongoose(EventInfoModel);

module.exports = {
  EventInfoSchema: EventInfoModel,
  EventInfoTC,
};
