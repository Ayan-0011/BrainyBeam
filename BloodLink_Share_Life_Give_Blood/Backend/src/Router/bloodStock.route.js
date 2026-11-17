const express = require("express");
const router = express.Router();
const bloodStockController = require("../Controller/bloodStock.controller");
const protect = require("../Middleware/auth.middleware");
const authorize = require("../Middleware/role.middleware");

router.use(protect, authorize("admin"));

router.post("/", bloodStockController.createStock);
router.get("/", bloodStockController.getAllStock);
router.get("/:id", bloodStockController.getStockById);
router.put("/:id", bloodStockController.updateStock);
router.delete("/:id", bloodStockController.deleteStock);

module.exports = router;
