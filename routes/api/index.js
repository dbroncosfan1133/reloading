const router = require("express").Router();
const loadRoutes = require("./loads");
const dataRoutes = require("./data");

// Load routes
router.use("/loads", loadRoutes);
router.use("/data", dataRoutes);

module.exports = router;
