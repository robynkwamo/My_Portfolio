const mongoose = require('mongoose');

const { composeMongoose } = require('graphql-compose-mongoose');

const Schema = mongoose.Schema;

const message = new Schema(
  {
    message: { type: String, default: '', required: true },
    messageType: { type: String, default: '', required: true },
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

const MessageModel = mongoose.model('message', message, 'message');
const MessageTC = composeMongoose(MessageModel);

module.exports = {
  MessageSchema: MessageModel,
  MessageTC,
};
