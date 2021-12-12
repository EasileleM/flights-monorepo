const express = require('express')

const flights = require('./flights')
const maintenances = require('./maintenances')
const planes = require('./planes')

const router = express.Router();

router.use('/flights', flights);
router.use('/maintenances', maintenances);
router.use('/planes', planes);

module.exports = router;
