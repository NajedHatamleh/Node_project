const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    Id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    assinedToId: {
        type: String,
        required: true
    },
    issuedById: {
        type: String,
        required: true
    },
    prioirty: {
        enum: ['Low', 'Meduim', 'High'],
        required: true
    },
    replacmentAprroval: {
        type: Boolean,
        required: false
    },
    // hardwareParts: [{
    //     part: String
    // }],
    requestedPartDesc: {
        type: String,
        required = true
    },
    Device: {
        type: mongoose.Types.ObjectId,
        required: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
