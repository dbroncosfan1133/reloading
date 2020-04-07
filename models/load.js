const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loadSchema = new Schema({
    lotNumber: { type: Number, unique: true},
    date: { type: String, required: true },
    caliber: { type: String, required: true },
    bulletBrand: { type: String, required: true },
    bulletName: { type: String, required: true },
    bulletGrains: { type: String, required: true },
    powderBrand: { type: String, required: true },
    powderName: { type: String, required: true },
    powderGrains: { type: String, required: true },
    trim: { type: Number, required: true },
    roundsLoaded: { type: Number, required: true },
    notes: { type: String, required: false}
});

const Load = mongoose.model("Load", loadSchema);

module.exports = Load;