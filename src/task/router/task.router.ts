import express from "express";
import * as core from "express-serve-static-core";
import * as taskController from "../controller/task.controller";
const router = express.Router();

export function routes(): core.Router {
  router.route("/tasks/:username").get(taskController.getTasksForUser);

  router.route("/tasks").post(taskController.createTaskForUser);

  router.route("/tasks").put(taskController.updateTask);

  router.route("/tasks/:id").delete(taskController.deleteTask);

  return router;
}
