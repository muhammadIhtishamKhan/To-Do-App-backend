import express, { Router } from "express";
import * as userController from "../controller/user.controller";
import * as core from "express-serve-static-core";
const router = express.Router();

export function routes(): core.Router {
  router.route("/users").get(userController.getAllUsers);

  router.route("/users/:username").get(userController.getByUsername);

  router.route("/users").post(userController.createUser);

  router.route("/users/:username").put(userController.updateUser);

  router.route("/users/:username").delete(userController.deleteUser);
  return router;
}
