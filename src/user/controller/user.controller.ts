import express from "express";
import * as userService from "../service/user.service";
import { CreateUserRequest } from "../model/user.request.model";
import bodyParser, { BodyParser } from "body-parser";
/**
 * get all users
 * @param req request
 * @param res response
 * @returns
 */
export async function getAllUsers(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err: any) {
    console.log("[UserController][getAllUsers] unable to search users", err);
    return res.status(500).json({ message: err.toString() });
  }
}

/**
 * get user information by username
 * @param req request
 * @param res response
 * @returns
 */
export async function getByUsername(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    const user = await userService.getByUsername(req.params.username);
    return res.status(200).json(user);
  } catch (err: any) {
    console.log("[UserController][getByUsername] unable to search users", err);
    return res.status(500).json({ message: err.toString() });
  }
}

/**
 * creates a new user
 * @param req request
 * @param res response
 * @returns The success/failure response of whether a user could be created or not
 */
export async function createUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await userService.createUser(req.body as CreateUserRequest);
    return res.status(201).send("New user Created");
  } catch (err: any) {
    console.log("[UserController][createUser] unable to create user", err);
    return res.status(500).json({ message: err.toString() });
  }
}

/**
 * update user information
 * @param req request
 * @param res response
 * @returns whether a user was created or not
 */
export async function updateUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await userService.updateUser(req.params.username, req.body);
    return res.status(200).send("User information updated");
  } catch (err: any) {
    console.log("[UserController][updateUser] unable to udpate user", err);
    return res.send(500).json({ message: err.toString() });
  }
}

export async function deleteUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await userService.deleteUser(req.params.username);
    return res.status(204).send("User deleted");
  } catch (err: any) {
    console.log(
      "[UserController][deleteUser] User could not be deleted. ",
      err
    );
    return res.status(500).send({ message: err.toString() });
  }
}
