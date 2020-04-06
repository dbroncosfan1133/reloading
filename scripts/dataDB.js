const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI ||
    "mongodb://192.168.1.96/reloading_db"
);

const startingData = [
    {
        imageURL: "/public/images/223-Remington.jpeg",
        bulletWeight: "55 gr. Bar TXT FB",
        bulletDiameter: ".224",
        COL: "2.18",
        powderManufacturer: "Hodgdon",
        startPowder: "H335",
        startGrains: "21.3",
        startVelocity: "2920",
        startPressure: "48900",
        maxGrains: "22.7",
        maxVelocity: "3063",
        maxPressure: "53000"
    },
    {
        imageURL: "/public/images/223-Remington.jpeg",
        bulletWeight: "55 gr. SFire",
        bulletDiameter: ".224",
        COL: "2.220",
        powderManufacturer: "Hodgdon",
        startPowder: "H335",
        startGrains: "21.4",
        startVelocity: "2969",
        startPressure: "47000",
        maxGrains: "22.8",
        maxVelocity: "3099",
        maxPressure: "51800"
    },
    {
        imageURL: "/public/images/223-Remington.jpeg",
        bulletWeight: "55 gr. SPR SP",
        bulletDiameter: ".224",
        COL: "2.200",
        powderManufacturer: "Hodgdon",
        startPowder: "H335",
        startGrains: "23.0",
        startVelocity: "3018",
        startPressure: "40800",
        maxGrains: "25.3",
        maxVelocity: "3203",
        maxPressure: "49300"
    }
];

db.LoadParams
    .remove({})
    .then(() => db.LoadParams.collection.insertMany(startingData))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });