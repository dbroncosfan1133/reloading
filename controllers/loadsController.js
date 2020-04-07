const db = require("../models");

// Defining methods for the loadsController
module.exports = {
  findAll: function(req, res) {
    db.Load
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Load
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const tempObj = {
      lotNumber: req.body.lotNumber,
      date: req.body.date,
      caliber: req.body.caliber,
      bulletBrand: req.body.bulletBrand,
      bulletName: req.body.bulletName,
      bulletGrains: req.body.bulletGrains,
      powderBrand: req.body.powderBrand,
      powderName: req.body.powderName,
      powderGrains: req.body.powderGrains,
      trim: req.body.trim,
      roundsLoaded: req.body.roundsLoaded,
      notes: req.body.notes
    }
    db.Load
      .create(tempObj)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Load
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Load
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
