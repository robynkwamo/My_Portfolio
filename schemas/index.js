const { SchemaComposer } = require('graphql-compose');

const { EventInfoQuery } = require('../queries/EventInfo.query');
const { EventInfoMutation } = require('../mutations/EventInfo.mutation');

const { GuestInfoQuery } = require('../queries/GuestInfo.query');
const { GuestInfoMutation } = require('../mutations/GuestInfo.mutation');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...EventInfoQuery,
  ...GuestInfoQuery,
});

schemaComposer.Mutation.addFields({
  ...EventInfoMutation,
  ...GuestInfoMutation,
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
