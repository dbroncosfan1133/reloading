const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGO_URI ||
  "mongodb://localhost/reloading"
);

const startingLoad = [
  {
    date: new Date(Date.now()),
    caliber: ".223 Remington",
    bulletBrand: "Hornady",
    bulletName: "V-Max",
    bulletGrains: "55",
    powderBrand: "Hodgdon",
    powderName: "H335",
    powderGrains: "21.3",
    trim: 1
  },
  {
    date: new Date(Date.now()),
    caliber: ".40 S&W",
    bulletBrand: "Speer",
    bulletName: "TMJ",
    bulletGrains: "180",
    powderBrand: "Winchester",
    powderName: "231",
    powderGrains: "4.4",
    trim: 0
  }
];

db.Load
  .remove({})
  .then(() => db.Load.collection.insertMany(startingLoad))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });