const {ObjectId} = require('mongodb'); 

function handleUpdateMaintenance(value, db) {
    db.collection('maintenances').updateOne({ _id: ObjectId(value.id) }, { $set: {
        ...value.data,
        plane_id: ObjectId(value.data.plane_id)
    }})
}

module.exports = handleUpdateMaintenance
