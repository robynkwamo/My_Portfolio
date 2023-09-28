const mongoose = require('mongoose');

const WarnLogsSchema = new mongoose.Schema({}, { timestamps: true, strict: false, collection: 'warnLogs' });

const WarnLogs = mongoose.model('WarnLogs', WarnLogsSchema);

module.exports = WarnLogs;
