const {ObjectId} = require('mongodb'); 

function handleUpdatePlane(value, db) {
    console.log(value.id, value.data)
    db.collection('planes').updateOne({ _id: ObjectId(value.id) }, { $set: {
        ...value.data,
        maintenances: value.data.maintenances.map((maintenance_id) => ObjectId(maintenance_id)),
        flights: value.data.flights.map((flight_id) => ObjectId(flight_id))
    } })
}

module.exports = handleUpdatePlane
