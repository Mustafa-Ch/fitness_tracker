const express = require("express");
const {
  workouts,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controller/workout");

const authorization = require("../middlewares/authorization");

const router = express.Router();

router.route("/createWorkout").post(authorization, createWorkout);
router.route("/getAllWorkout").get(workouts);
router.route("editWorkout/:id").put(authorization,editWorkout);
router.route("deleteWorkout/:id").delete(authorization,deleteWorkout);

module.exports = router;
