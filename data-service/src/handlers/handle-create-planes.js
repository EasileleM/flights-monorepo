const {ObjectId} = require('mongodb'); 

function handleCreatePlane(value, db) {
    db.collection('planes').insertOne({
        ...value,
        maintenances: value.maintenances?.map((maintenance_id) => ObjectId(maintenance_id)),
        flights: value.flights?.map((flight_id) => ObjectId(flight_id))
    })
}

module.exports = handleCreatePlane
