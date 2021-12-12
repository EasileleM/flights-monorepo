const {MongoClient} = require("mongodb");
const {DB_NAME} = require('../consts')

const mongoUri = 'mongodb+srv://savva:qwerty1234@cluster0.ru9a5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoClient = new MongoClient(mongoUri);

const db = mongoClient.connect().then((connection) => {
    return connection.db(DB_NAME)
});

function getDb () {
    return db
}

module.exports = getDb
