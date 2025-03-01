const express = require("express");
const {
  nutritionLogs,
  updateNutrition,
  createNutritionLog,
  deleteNutrition
} = require("../controller/nutrition");

const router = express.Router();
const authorization = require("../middlewares/authorization");


router.route("/createNutrition").post(authorization, createNutritionLog); // Create a nutrition log
router.route("/getAllNutrition").get( nutritionLogs); // Get all nutrition logs
router.route("/editNutrition/:nutritionId").put(authorization,updateNutrition); // Update a nutrition log
router.route("/deleteNutrition/:nutritionId").delete(authorization, deleteNutrition);
module.exports = router;
