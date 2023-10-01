const { GuestInfoTC } = require('../models/guestInfo.model');
const log = require('../utils/serverLog');

const XLSX = require('xlsx');

function parseExcel(fileBuffer) {
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}

exports.bulkUploadGuests = async (req, res) => {
  log.info('request', req.files);
  if (!req.files || !req.files.uploadedFile) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const file = req.files.uploadedFile;
  const data = parseExcel(file.data);

  log.info('Data uploaded', data);
};
