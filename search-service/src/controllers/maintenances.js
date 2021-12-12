const {ObjectId} = require('mongodb'); 
const getDb = require('../db')

const controller = {
    getAll () {
        return getDb().then(db => db.collection('maintenances').find().toArray())
    },
    get (id) {
        return getDb().then(db => db.collection('maintenances').findOne({ _id: ObjectId(id) }))
    },
    // getStats () {
    //     return getDb().then(db => db.collection('maintenances').aggregate([
    //         { $group: { _id: "$type", amount: { $sum : 1 } } }
    //     ]).toArray())
    // },
    getStats () {
        return getDb().then(db => db.collection('maintenances').aggregate([
            {
                $lookup : {
                    from: 'planes',
                    localField: 'plane_id',
                    foreignField: '_id',
                    as: 'plane'
                }
            }
        ]).toArray())
    },
}

module.exports = controller
