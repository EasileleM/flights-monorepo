const {TOPICS} = require('../../consts')
const getProducer = require('../kafka-producer')

const controller = {
    create (data, cb) {
        getProducer().then((producer) => producer.send([{
            topic: TOPICS.FLIGHTS_CREATE,
            messages: JSON.stringify(data)
        }], cb))
    },
    update (id, data, cb) {
        getProducer().then((producer) => producer.send([{
            topic: TOPICS.FLIGHTS_UPDATE,
            messages: JSON.stringify({
                id,
                data
            })
        }], cb))
    }
}

module.exports = controller
