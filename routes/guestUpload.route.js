const router = require('express').Router();
const uploadController = require('../controllers/upload.controller');

router.route('/bulkUpload').post(uploadController.bulkUploadGuests);

module.exports = router;
