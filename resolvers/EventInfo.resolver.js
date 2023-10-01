const { EventInfoSchema, EventInfoTC } = require('../models/eventInfo.model');

const log = require('../utils/serverLog');

const eventInfoCreateOne = EventInfoTC.addResolver({
  name: 'createOne',
  kind: 'mutation',
  type: 'Boolean',
  args: {
    eventName: 'String',
    ownerFirstName: 'String',
    ownerLastName: 'String',
    ownerPhoneNumber: 'String',
    description: 'String',
    slug: 'String',
    email: 'String',
    eventLocation: 'JSON!',
    eventDate: 'Date',
  },
  resolve: async ({ args }) => {
    try {
      // Create a new event Object based on the mongo schema
      const {
        eventName,
        ownerFirstName,
        ownerLastName,
        ownerPhoneNumber,
        description,
        slug,
        email,
        eventLocation,
        eventDate,
      } = args;

      const newEvent = new EventInfoSchema({
        eventName,
        ownerFirstName,
        ownerLastName,
        ownerPhoneNumber,
        description,
        slug,
        email,
        eventLocation,
        eventDate,
      });

      const session = await EventInfoSchema.startSession();
      const transactionOptions = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' },
      };
      const tranRes = await session.withTransaction(async () => {
        const eventCreated = await newEvent
          .save({ session })
          .then(async (doc) => {
            log.info(`${eventName} has been saved successfully with ID ${doc._id}`);
            if (doc?._id) {
              return true;
            }
            return false;
          })
          .catch((err) => {
            log.error(`There was an issue saving ${eventName}'s event with the following error: ${err}`);
            return false;
          });
        if (!eventCreated) {
          await session.abortTransaction();
          return new Error('Due To Some Error With Information, Aborting event Creation... ');
        }
      }, transactionOptions);
      await session.endSession();
      if (tranRes) {
        return true;
      }
      return false;
    } catch (error) {
      log.error(`Error while creating new event ${error.message}`);
      return error;
    }
  },
});

// Get an event details
const eventInfoById = EventInfoTC.addResolver({
  name: 'findById',
  kind: 'query',
  type: EventInfoTC,
  args: {
    id: 'ID!',
  },
  resolve: async ({ args }) => {
    // Get the details of an events
    const { id } = args;
    const myQuery = {
      _id: id,
      isDeleted: false,
    };

    const event = EventInfoSchema.find(myQuery)
      .then(async (doc) => doc[0])
      .catch((err) => {
        log.error('Error getting event Info', err);
        return new Error(err);
      });

    return event;
  },
});

module.exports = { eventInfoCreateOne, eventInfoById };
