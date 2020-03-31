const router = require("express").Router();
const loadsController = require("../../controllers/loadsController");

// Matches with "/api/loads"
router.route("/")
  .get(loadsController.findAll)
  .post(loadsController.createNewLoad);

// Matches with "/api/loads/:id"
router
  .route("/:id")
  .get(loadsController.findById)
  .put(loadsController.update)
  .delete(loadsController.remove);

module.exports = router;
