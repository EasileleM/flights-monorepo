const express = require('express')
const request = require('request')

const {SEARCH_SERVICE_URL} = require('../../consts')
const controller = require('../controllers/flights')

const router = express.Router();

router.get('/all', function(req, res, next) {
    req.pipe(request(`${SEARCH_SERVICE_URL}/flights/all`)).pipe(res)
});

router.get('/stats', function(req, res, next) {
    req.pipe(request(`${SEARCH_SERVICE_URL}/flights/stats`)).pipe(res)
});

router.get('/:id', function(req, res, next) {
    req.pipe(request(`${SEARCH_SERVICE_URL}/flights/${req.params.id}`)).pipe(res)
});

router.post('/create', function(req, res, next) {
    controller.create(req.body, (error) => res.status(error ? 500 : 200).send())
});

router.post('/:id', function(req, res, next) {
    controller.update(req.params.id,req.body, (error) => res.status(error ? 500 : 200).send())
});

module.exports = router;
