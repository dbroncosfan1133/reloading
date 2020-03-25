const router = require("express").Router();
const loadRoutes = require("./loads");

// Load routes
router.use("/loads", loadRoutes);

module.exports = router;
