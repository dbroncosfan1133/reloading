const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loadSchema = new Schema({
    date: { type: Date, default: Date.now },
    caliber: { type: String, required: true },
    bulletBrand: { type: String, required: true },
    bulletName: { type: String, required: true },
    bulletGrains: { type: String, required: true },
    powderBrand: { type: String, required: true },
    powderName: { type: String, required: true },
    powderGrains: { type: String, required: true },
    trim: { type: Number, required: true }
});

const Load = mongoose.model("Load", loadSchema);

module.exports = Load;