const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const log = require('../utils/serverLog');

// API to send message notification

const sendMessage = async (phoneNumber, messageToSend, flyerImg) => {
  try {
    // const { phoneNumber } = guestInfo;
    const sendNumber = '+18448441571';

    if (flyerImg) {
      client.messages
        .create({
          body: `${messageToSend}
            `,
          messagingServiceSid: process.env.TWI_MESSAGING_SERV_SID,
          to: phoneNumber,
          from: sendNumber,
          mediaUrl: flyerImg,
        })
        .then((message) => {
          log.info('Message Status =>', message.status);
        })
        .catch((error) => {
          log.error('Error Sending sms', error);
          return new Error('Error sending sms');
        });
    } else {
      client.messages
        .create({
          body: `${messageToSend}
              `,
          messagingServiceSid: process.env.TWI_MESSAGING_SERV_SID,
          to: phoneNumber,
          from: sendNumber,
        })
        .then((message) => {
          log.info('Message Status =>', message.status);
        })
        .catch((error) => {
          log.error('Error Sending sms', error);
          return new Error('Error sending sms');
        });
    }
  } catch (error) {
    log.error('Error Sending sms', error);
    return new Error('Error sending sms');
  }
};

module.exports = { sendMessage };
