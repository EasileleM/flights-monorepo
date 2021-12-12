const {Producer, KafkaClient} = require('kafka-node')

const {KAFKA_URL, TOPICS} = require('../consts')

const kafkaClient = new KafkaClient({kafkaHost: KAFKA_URL})

const producerPromise = new Promise((resolve) => {
    kafkaClient.on('ready', () => {
        const producer = new Producer(kafkaClient)

        kafkaClient.createTopics([
            { topic: TOPICS.FLIGHTS_CREATE, partitions: 1, replicationFactor: 1 },
            { topic: TOPICS.FLIGHTS_UPDATE, partitions: 1, replicationFactor: 1 },
            { topic: TOPICS.PLANES_CREATE, partitions: 1, replicationFactor: 1 },
            { topic: TOPICS.PLANES_UPDATE, partitions: 1, replicationFactor: 1 },
            { topic: TOPICS.MAINTENANCE_CREATE, partitions: 1, replicationFactor: 1 },
            { topic: TOPICS.MAINTENANCE_UPDATE, partitions: 1, replicationFactor: 1 }
        ], () => {
            resolve(producer)
        })
    })
})

function getProducer() {
    return producerPromise
}

module.exports = getProducer
