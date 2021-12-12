const express = require('express')

const router = express.Router();

const controller = require('../controllers/flights')

router.get('/all', function(req, res, next) {
    controller.getAll().then((all) => res.json(all).send())
});

router.get('/stats', function(req, res, next) {
    controller.getStats().then((stats) => res.json(stats).send())
});

router.get('/:id', function(req, res, next) {
    controller.get(req.params.id).then((item) => res.json(item).send())
});

module.exports = router;
