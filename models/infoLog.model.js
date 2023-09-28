const mongoose = require('mongoose');

const InfoLogsSchema = new mongoose.Schema({}, { timestamps: true, strict: false, collection: 'infoLogs' });

const InfoLogs = mongoose.model('InfoLogs', InfoLogsSchema, 'InfoLogs');

module.exports = InfoLogs;
