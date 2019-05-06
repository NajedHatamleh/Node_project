const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ManagerSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    managerId: {
        type: String,
        required: true,
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
    orders: [{
        id: String
    }],
    orderHistory: [{
        id: String
    }]  
});

module.exports = mongoose.model('Manager', ManagerSchema);
