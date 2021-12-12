const {ObjectId} = require('mongodb'); 

function handleUpdateFlight(value, db) {
    db.collection('flights').updateOne({ _id: ObjectId(value.id) }, { $set: {
        ...value.data,
        plane_id: ObjectId(value.data.plane_id)
    }})
}

module.exports = handleUpdateFlight
