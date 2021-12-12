const {KafkaClient, Consumer} = require('kafka-node')
const {MongoClient} = require("mongodb");

const {KAFKA_URL, DB_NAME, TOPICS} = require('../consts')

const kafkaClient = new KafkaClient({kafkaHost: KAFKA_URL})

const handleCreateFlight = require('./handlers/handle-create-flight')
const handleUpdateFlight = require('./handlers/handle-update-flight')
const handleCreatePlanes = require('./handlers/handle-create-planes')
const handleUpdatePlanes = require('./handlers/handle-update-planes')
const handleCreateMaintenance = require('./handlers/handle-create-maintenance')
const handleUpdateMaintenance = require('./handlers/handle-update-maintenance')

const mongoUri = 'mongodb+srv://savva:qwerty1234@cluster0.ru9a5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoClient = new MongoClient(mongoUri);

const topicHandlers = {
  [TOPICS.FLIGHTS_CREATE]: handleCreateFlight,
  [TOPICS.FLIGHTS_UPDATE]: handleUpdateFlight,
  [TOPICS.PLANES_CREATE]: handleCreatePlanes,
  [TOPICS.PLANES_UPDATE]: handleUpdatePlanes,
  [TOPICS.MAINTENANCE_CREATE]: handleCreateMaintenance,
  [TOPICS.MAINTENANCE_UPDATE]: handleUpdateMaintenance,
}

async function run() {
  const connection = await mongoClient.connect();
  const db = connection.db(DB_NAME)
  const consumer = new Consumer(kafkaClient, [
    { topic: TOPICS.FLIGHTS_CREATE },
    { topic: TOPICS.FLIGHTS_UPDATE },
    { topic: TOPICS.PLANES_CREATE },
    { topic: TOPICS.PLANES_UPDATE },
    { topic: TOPICS.MAINTENANCE_CREATE },
    { topic: TOPICS.MAINTENANCE_UPDATE }
  ])
  consumer.on('message', (message) => {
    console.log(message)
    topicHandlers[message.topic](JSON.parse(message.value), db)
  })
  console.log("Listening for kafka events");
}

kafkaClient.on('ready', () => {
  run()
})
