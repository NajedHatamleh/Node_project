const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema ({
    serialNum: {
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    networked: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Device', DeviceSchema);
