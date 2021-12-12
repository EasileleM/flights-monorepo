const {ObjectId} = require('mongodb'); 
const getDb = require('../db')

const controller = {
    getAll () {
        return getDb().then(db => db.collection('planes').find().toArray())
    },
    get (id) {
        return getDb().then(db => db.collection('planes').findOne({ _id: ObjectId(id) }))
    },
    // getStats () {
    //     return getDb().then(db => db.collection('planes').aggregate([
    //         { $group: { _id: "$name", amount: { $sum : 1 }, minFuelConsumtion: { $min: "$stats.fuelConsumptionPerKm" } } }
    //     ]).toArray())
    // },
    // getStats () {
    //     return getDb().then(db => db.collection('planes').aggregate([
    //         { $sort: { 'stats.fuelConsumptionPerKm': 1 } },
    //         { $limit : 3 },
    //         { $project: { name: 1, stats: { fuelConsumptionPerKm: 1 } } }
    //         
    //     ]).toArray())
    // },
    // getStats () {
    //     return getDb().then(db => db.collection('planes').aggregate([
    //         {
    //             $match: {
    //                 'stats.maxFlightHeight': {
    //                     $gt: 10000
    //                 }
    //             }
    //         }
    //     ]).toArray())
    // },
    // getStats () {
    //     return getDb().then(db => db.collection('planes').aggregate([
    //         {
    //             $project: { name: 1, count: { $size: "$maintenances" }}
    //         },
    //         {
    //             $match: {
    //                 count: {
    //                     $gt: 0
    //                 }
    //             }
    //         }
    //     ]).toArray())
    // },
    // getStats () {
    //     return getDb().then(db => db.collection('planes').aggregate([
    //         {
    //             $project: { name: 1, count: { $size: "$flights" }}
    //         },
    //         {
    //             $match: {
    //                 count: {
    //                     $lt: 1000
    //                 }
    //             }
    //         }
    //     ]).toArray())
    // },
}

module.exports = controller
