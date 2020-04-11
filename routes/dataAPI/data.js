const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/data"
router.route("/")
  .get(dataController.findAllData)
//   .post(loadsController.create);

// Matches with "/api/data/:id"
// router
//   .route("/:id")
//   .get(loadsController.findById)
//   .put(loadsController.update)
//   .delete(loadsController.remove);

module.exports = router;