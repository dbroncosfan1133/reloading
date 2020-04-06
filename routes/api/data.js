const router = require("express").Router();
const loadsController = require("../../controllers/loadsController");

// Matches with "/api/data"
router.route("/")
  .get(loadsController.findAllData)
//   .post(loadsController.create);

// Matches with "/api/data/:id"
// router
//   .route("/:id")
//   .get(loadsController.findById)
//   .put(loadsController.update)
//   .delete(loadsController.remove);

module.exports = router;