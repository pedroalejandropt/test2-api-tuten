const express = require('express');
const timezoneService = require('../../services/timezone/timezone');
let router = express.Router();

router.post('/', timezoneService.getUTC);

module.exports = router;