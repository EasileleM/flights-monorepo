const {ObjectId} = require('mongodb'); 
const getDb = require('../db')

const controller = {
    getAll () {
        return getDb().then(db => db.collection('flights').find().toArray())
    },
    get (id) {
        return getDb().then(db => db.collection('flights').findOne({ _id: ObjectId(id) }))
    },
    getStats () {
        return getDb().then(db => db.collection('flights').aggregate([
            { $group: { _id: "$type", sumLength: { $sum: "$length" }, avgLength: { $avg: "$length" }, amount: { $sum : 1 } } }
        ]).toArray())
    }
}

module.exports = controller
