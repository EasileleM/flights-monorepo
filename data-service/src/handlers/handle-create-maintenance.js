const {ObjectId} = require('mongodb'); 

function handleCreateMaintenance(value, db) {
    db.collection('maintenances').insertOne({
        ...value,
        plane_id: ObjectId(value.plane_id)
    })
}

module.exports = handleCreateMaintenance
