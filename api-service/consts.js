const API_SERVICE_PORT = 3002
const SEARCH_SERVICE_PORT = 4021
const SEARCH_SERVICE_URL = `http://search-service:${SEARCH_SERVICE_PORT}`
const KAFKA_URL = 'kafka:9092'

const TOPICS = {
    FLIGHTS_CREATE: 'flights.create',
    FLIGHTS_UPDATE: 'flights.update',
    MAINTENANCE_CREATE: 'maintenances.create',
    MAINTENANCE_UPDATE: 'maintenances.update',
    PLANES_CREATE: 'planes.create',
    PLANES_UPDATE: 'planes.update',
}

module.exports = {
    API_SERVICE_PORT,
    SEARCH_SERVICE_PORT,
    SEARCH_SERVICE_URL,
    KAFKA_URL,
    TOPICS
}