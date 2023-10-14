const { EventInfoSchema } = require('../models/eventInfo.model');
const { GuestInfoSchema, GuestInfoTC } = require('../models/guestInfo.model');
const { MessageTC } = require('../models/sms.model');

const log = require('../utils/serverLog');

async function sendRSVEvent(firstName, lastName, phoneNumber, isConfirmed) {
  if (!firstName || !message || !isConfirmed) {
    return false;
  }
  const isEmailSent = sendEmail(firstName, lastName, phoneNumber, isConfirmed);
  if (isEmailSent) {
    return true;
  }
  return false;
}

const guestInfoCreateOne = GuestInfoTC.addResolver({
  name: 'createOne',
  kind: 'mutation',
  type: 'Boolean',
  args: {
    firstName: 'String!',
    lastName: 'String!',
    phoneNumber: 'String!',
    isAttending: 'Boolean',
    canHavePlusOne: 'Boolean',
    hasPlusOne: 'Boolean',
    eventId: 'ID!',
  },
  resolve: async ({ args }) => {
    try {
      // Create a new guest Object based on the mongo schema
      const { firstName, lastName, phoneNumber, isAttending, canHavePlusOne, hasPlusOne, eventId } = args;

      const newGuest = new GuestInfoSchema({
        firstName,
        lastName,
        phoneNumber,
        isAttending,
        canHavePlusOne,
        hasPlusOne,
        eventId,
      });

      const session = await GuestInfoSchema.startSession();
      const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' },
      };
      const tranRes = await session.withTransaction(async () => {
        const guestCreated = await newGuest
          .save({ session })
          .then(async (doc) => {
            log.info(`${firstName} has been saved successfully with ID ${doc._id}`);
            if (doc?._id) {
              return true;
            }
            return false;
          })
          .catch((err) => {
            log.error(`There was an issue saving ${firstName}'s guest with the following error: ${err}`);
            return false;
          });
        if (!guestCreated) {
          await session.abortTransaction();
          return new Error('Due To Some Error With Information, Aborting guest Creation... ');
        }
      }, transactionOptions);
      await session.endSession();
      if (tranRes) {
        return true;
      }
      return false;
    } catch (error) {
      log.error(`Error while creating new guest ${error.message}`);
      return error;
    }
  },
});

const guestInfoCreateMany = GuestInfoTC.addResolver({
  name: 'createMany',
  kind: 'mutation',
  type: 'Boolean',
  args: {
    guests: '[JSON]!',
    eventId: 'ID!',
  },
  resolve: async ({ args }) => {
    try {
      // Create a new guest Object based on the mongo schema
      const { guests, eventId } = args;

      const guestsInfo = guests.map((guest) => {
        return {
          ...guest,
          eventId,
        };
      });

      //Check if guest already exist
      const existingGuests = [];

      for (const obj of guestsInfo) {
        const existingDocument = await GuestInfoSchema.findOne({
          eventId,
          phoneNumber: obj.phoneNumber,
        });

        if (existingDocument) {
          existingGuests.push(obj);
        }
      }

      if (existingGuests.length === 0) {
        return GuestInfoSchema.insertMany(guestsInfo, (error, doc) => {
          log.info(`${guests[i].firstName} has been saved successfully with ID ${doc._id}`);

          if (error) {
            log.error(`There was an issue saving ${guests[i].firstName}: ${err}`);
            return new Error(err.message);
          } else {
            console.log('Successfully inserted documents:', documents);
            return doc;
          }
        });
      } else {
        log.info('Guest with same info already exist');
        return {
          message: 'Some guests with same info already exist',
          existingGuests,
        };
      }
    } catch (error) {
      log.error(`Error while creating new guest ${error.message}`);
      return error;
    }
  },
});

// Update guest by phoneNumber
const guestUpdateById = GuestInfoTC.addResolver({
  name: 'updateGuest',
  kind: 'query',
  type: 'Boolean',
  args: {
    phoneNumber: 'String!',
    updatedField: '[JSON]!',
    eventId: 'ID',
  },
  resolve: async ({ args }) => {
    try {
      const { phoneNumber, updatedField } = args;
      const allowedFields = ['phoneNumber'];
      log.info('Guest updated the invite: ', phoneNumber);
      updatedField.push({ hasResponded: true });
      updatedField.forEach((field) => {
        for (const key in field) {
          if (!allowedFields.includes(key)) {
            return new Error(`Invalid Field: ${key}`);
          }
        }
      });
      const session = await GuestInfoSchema.startSession();
      const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' },
      };
      const transRes = await session.withTransaction(async () => {
        const myQuery = {
          phoneNumber,
        };
        const updateArray = [];
        // Creating the update array to update all the fields at once
        for (let index = 0; index < updatedField.length; index += 1) {
          // first object to update
          const field = updatedField[index];
          for (const key in field) {
            if (Object.prototype.hasOwnProperty.call(field, key)) {
              const myUpdate = {
                $set: { [key]: field[key] },
              };
              updateArray.push(myUpdate);
            }
          }
        }
        const isUpdated = await GuestInfoSchema.updateOne(myQuery, updateArray, {
          session,
        })
          .then(async (doc) => {
            log.info('guestInfo Updated', doc.acknowledged);
            // await sendRSVEvent('', '', phoneNumber, updatedField.isAttending);
            return true;
          })
          .catch((err) => {
            log.error(`ERROR CAUGHT ${err}`);
            return false;
          });
        if (!isUpdated) {
          log.info('INFO NOT UPDATED ABORTTING');
          await session.abortTransaction();
        }
      }, transactionOptions);
      await session.endSession();
      if (transRes) {
        return true;
      }
      return false;
    } catch (error) {
      log.error(`Error while trying to save guestInfo ${error}`);
      return error;
    }
  },
});

// Get an guest details
const guestInfoById = GuestInfoTC.addResolver({
  name: 'findById',
  kind: 'query',
  type: GuestInfoTC,
  args: {
    phoneNumber: 'String!',
  },
  resolve: async ({ args }) => {
    try {
      // Get the details of an guests
      const { phoneNumber } = args;
      const myQuery = {
        phoneNumber,
        isDeleted: false,
      };

      const guest = GuestInfoSchema.find(myQuery)
        .then(async (doc) => doc[0])
        .catch((err) => {
          log.error('Error getting guest Info', err);
          return new Error(err);
        });

      return guest;
    } catch (error) {
      log.error(`Error while creating new guest ${error.message}`);
      return error;
    }
  },
});

// Send message update to one guest
const sendUpdateToGuest = MessageTC.addResolver({
  name: 'sendUpdateToGuest',
  kind: 'mutation',
  type: MessageTC,
  args: {
    eventId: 'ID!',
    messageType: 'String!',
    phoneNumber: 'String!',
  },
  resolve: async ({ args }) => {
    try {
      // Get the details of an guests
      const { sendMessage } = require('../functions/sms');
      const { eventId, messageType, phoneNumber } = args;

      const guestQuery = {
        phoneNumber,
        eventId,
        isDeleted: false,
      };
      const myQuery = {
        _id: eventId,
        isDeleted: false,
      };

      await GuestInfoSchema.find(guestQuery)
        .then(async (doc) => {
          //   console.log({ doc });
          let guestInfo = doc[0];

          await EventInfoSchema.find(myQuery).then(async (doc) => {
            // console.log({ doc });
            const eventInfo = doc[0];

            if (messageType === 'Invitation') {
              log.info('Sending invitation messages');
              //   for (let i = 0, j = guestInfo.length; i < j; i++) {
              const websiteLink = `https://nkwamo.com/${eventInfo.slug}`;
              const flyerImg =
                'https://res.cloudinary.com/dov6k0l17/image/upload/v1696117279/Brown_Teddy_Bear_Illustrated_Baby_Shower_Invitation_l4zkdt.jpg';
              // const msgToSend = `Hi ${guestInfo.firstName}, you're invited to ${eventInfo.eventName}. Please confirm you presence here: ${websiteLink}`;
              const msgToSendTemp = `Hi ${guestInfo.firstName}, we would love for you to join us for a SURPRISE baby shower, on October 28th from 04pm to 10pm, honoring Armelle and Roby as they await the birth of their little bundle of joy. Please confirm your presense here: ${websiteLink}. Stay tuned for further details! \n PS: This is a SURPRISE FOR ARMELLE so please do not reach out to her regarding this. \nContact host at (856) 946-2824.`;

              sendMessage(guestInfo.phoneNumber, msgToSendTemp, flyerImg);
              //   }
            } else if (messageType === 'AddressUpdate') {
              log.info('Sending address messages');
              //   guestInfo = guestInfo.filter((guest) => guest.isAttending === true);
              //   console.log({ guestInfo });
              const { eventLocation } = eventInfo;
              const { addressLine1, addressLine2, city, state, zipCode } = eventLocation;
              const eventAddress = `${addressLine1}, ${city}, ${state}, ${zipCode}`;
              //   for (let i = 0, j = guestInfo.length; i < j; i++) {
              // const msgToSend = `Hi ${guestInfo.firstName}, thank you for coming to ${eventInfo.eventName}. Here is the address ${eventAddress} and we hope to see you there by 3pm.`;
              const tempMsgToSend = `Hi ${guestInfo.firstName}, Thank you for confirming your presence at ${eventInfo.eventName}. We are looking forward to celebrating Armelle and Roby with you. Here is the Address to the event ${eventAddress}. Please note the start time of 4PM is to be respected as we would love for everyone to be present to surprise Armelle. \nSee you there!`;
              sendMessage(guestInfo.phoneNumber, tempMsgToSend, '');
              //   }
            }
          });
        })
        .catch((err) => {
          log.error('Error getting guest Info', err);
          return new Error(err);
        });

      return 'Done';
    } catch (error) {
      log.error(`Error while creating new guest ${error.message}`);
      return error;
    }
  },
});

// Send message update to all guest
const guestSendMsgToAll = MessageTC.addResolver({
  name: 'sendUpdateToAllGuests',
  kind: 'mutation',
  type: MessageTC,
  args: {
    eventId: 'ID!',
    messageType: 'String!',
  },
  resolve: async ({ args }) => {
    try {
      // Get the details of an guests
      const { sendMessage } = require('../functions/sms');
      const { eventId, messageType } = args;
      const myQuery = {
        eventId,
        isDeleted: false,
      };

      await GuestInfoSchema.find(myQuery)
        .then(async (doc) => {
          let guestList = doc;
          log.info('Guests list: ', guestList);

          await EventInfoSchema.find({ _id: eventId }).then(async (doc) => {
            const eventInfo = doc[0];
            log.info('Event info details: ', eventInfo);
            const websiteLink = `https://nkwamo.com/${eventInfo.slug}`;

            if (messageType === 'Invitation') {
              log.info('Sending invitation messages');
              for (let i = 0, j = guestList.length; i < j; i++) {
                const flyerImg =
                  'https://res.cloudinary.com/dov6k0l17/image/upload/v1696117279/Brown_Teddy_Bear_Illustrated_Baby_Shower_Invitation_l4zkdt.jpg';
                // const msgToSend = `Hi ${guestList[i].firstName}, you're invited to ${eventInfo.eventName}. Please confirm you presence here: ${websiteLink}`;
                const msgToSendTemp = `Hi ${guestList[i].firstName}, we would love for you to join us for a SURPRISE baby shower, on October 28th from 04pm to 10pm, honoring Armelle and Roby as they await the birth of their little bundle of joy. Please confirm your presense here: ${websiteLink} . Stay tuned for further details! \n PS: This is a SURPRISE FOR ARMELLE so please do not reach out to her regarding this. \nContact host at (856) 946-2824.`;

                sendMessage(guestList[i].phoneNumber, msgToSendTemp, flyerImg);
              }
            } else if (messageType === 'AddressUpdate') {
              log.info('Sending address messages');
              guestList = guestList.filter((guest) => guest.isAttending === true);
              console.log({ guestList });
              const { eventLocation } = eventInfo;
              const { addressLine1, addressLine2, city, state, zipCode } = eventLocation;
              const eventAddress = `${addressLine1}, ${city}, ${state}, ${zipCode}`;
              for (let i = 0, j = guestList.length; i < j; i++) {
                const tempMsgToSend = `Hi ${guestList[i].firstName}, Thank you for confirming your presence at ${eventInfo.eventName}. We are looking forward to celebrating Armelle and Roby with you. Here is the Address to the event ${eventAddress}. Please note the start time of 4PM is to be respected as we would love for everyone to be present to surprise Armelle. \n See you there!`;
                sendMessage(guestList[i].phoneNumber, tempMsgToSend, '');
              }
            } else if (messageType === 'rsvpReminder') {
              log.info('Sending rsvp reminder messages');
              guestList = guestList.filter((guest) => guest.hasResponded === false);
              log.info('Guests with no RSVP', guestList);
              for (let i = 0, j = guestList.length; i < j; i++) {
                const tempMsgToSend = `Hi ${guestList[i].firstName}, we have noticed that you have not RSVPed yet for Armelle's SURPRISE baby shower on October 28th. This is a friendly reminder to Please confirm your presence BY OCTOBER 15TH here: ${websiteLink} . \nThank you!`;
                sendMessage(guestList[i].phoneNumber, tempMsgToSend, '');
              }
            }
          });
        })
        .catch((err) => {
          log.error('Error getting guest Info', err);
          return new Error(err);
        });

      return 'Done';
    } catch (error) {
      log.error(`Error while creating new guest ${error.message}`);
      return error;
    }
  },
});

module.exports = {
  guestInfoCreateOne,
  guestInfoCreateMany,
  guestInfoById,
  guestUpdateById,
  guestSendMsgToAll,
  sendUpdateToGuest,
};
