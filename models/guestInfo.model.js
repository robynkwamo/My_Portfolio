const mongoose = require('mongoose');

const { composeMongoose } = require('graphql-compose-mongoose');

const Schema = mongoose.Schema;

const guestInfo = new Schema(
  {
    firstName: { type: String, default: '', required: true },
    lastName: { type: String, default: '', required: true },
    phoneNumber: { type: Number, default: '', required: true },
    isAttending: { type: Boolean, default: false, required: false },
    canHavePlusOne: { type: Boolean, default: false, required: false },
    hasPlusOne: { type: Boolean, default: false, required: false },
    hasResponded: { type: Boolean, default: false, required: false },
    isDeleted: { type: Boolean, default: false, required: false },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      default: '',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

guestInfo.index({ phoneNumber: 1, eventId: 1 }, { unique: true });

const GuestInfoModel = mongoose.model('guestInfo', guestInfo, 'guestInfo');
const GuestInfoTC = composeMongoose(GuestInfoModel);

module.exports = {
  GuestInfoSchema: GuestInfoModel,
  GuestInfoTC,
};
