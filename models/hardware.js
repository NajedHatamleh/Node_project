const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HardwareSchema = new Schema ({
    device_Id: {
        type: Number,
        required: true,
        unique: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    partName: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Hardware', HardwareSchema);