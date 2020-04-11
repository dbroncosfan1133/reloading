const router = require("express").Router();
const dataRoutes = require("./data");

// Load routes
router.use("/", dataRoutes);

module.exports = router;
