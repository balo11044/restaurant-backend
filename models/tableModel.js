const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TableModel = new Schema({
    url: { type: String, default:'' },
    chairNumber:{ type: String, required: true },
    status: { type: String, default:'avaiable' },
    tableNumber: { type: String, required: true, unique: true },
    owner:{ type: String, default:''}
}, {
        timestamps: true
    })

module.exports = mongoose.model('Table', TableModel)