const {ObjectId} = require('mongodb'); 

function handleCreateFlight(value, db) {
    db.collection('flights').insertOne({
        ...value,
        plane_id: ObjectId(value.plane_id)
    })
}

module.exports = handleCreateFlight
