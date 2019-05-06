const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniStaffSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    staffId: {
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
    officeLocation: {
        type: String,
        required: true
    },
    availableHours: [Number],
    order: [mongoose.Types.ObjectId],
    orderHistory: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('UniStaff', UniStaffSchema);
