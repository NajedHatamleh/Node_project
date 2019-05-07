const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechnicalSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    TechId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required = true
    },
    email: {
        type: String,
        required: true
    },
    officeLocation: {
        type: String,
        required: true
    },
    currentNumOfOrders: {
        type: Number,
        required: true
    },
    workTimeInLateTwoWeeks: {
        type: Number,
        required: true
    },
    orders: [mongoose.Types.ObjectId],
    orderHistory: [mongoose.Types.ObjectId]
}, {
    timestamps: true
});

module.exports = mongoose.model('Technical', TechnicalSchema);
