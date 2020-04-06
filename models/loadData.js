const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    imageURL: { type: String, required: true },
    bulletWeight: { type: String, require: true },
    bullerDiameter: { type: Number, require: true},
    COL: { type: Number, require: true },
    powderManufacturer: { type: String, require: true},
    powder: { type: String, require: true },
    startGrains: { type: Number, required: true },
    startVelocity: { type: Number, required: true },
    startPressure: { type: Number, required: true },
    maxGrains: { type: Number, required: true },
    maxVelocity: { type: Number, required: true },
    maxPressure: { type: Number, required: true }
});

const LoadParams = mongoose.model("LoadParams", dataSchema);

module.exports = LoadParams;