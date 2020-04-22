const db = require("../datamodel");

module.exports = {
  findAllData: function (req, res) {
    db.LoadData
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}