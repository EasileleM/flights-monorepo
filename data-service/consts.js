const KAFKA_URL = 'kafka:9092'
const DB_NAME = 'flights'
const TOPICS = {
    FLIGHTS_CREATE: 'flights.create',
    FLIGHTS_UPDATE: 'flights.update',
    MAINTENANCE_CREATE: 'maintenances.create',
    MAINTENANCE_UPDATE: 'maintenances.update',
    PLANES_CREATE: 'planes.create',
    PLANES_UPDATE: 'planes.update',
}

module.exports = {
    KAFKA_URL,
    DB_NAME,
    TOPICS
}