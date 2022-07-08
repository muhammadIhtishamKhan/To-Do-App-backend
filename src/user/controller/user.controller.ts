import express from "express";
import * as userService from "../service/user.service";
import { CreateUserRequest } from "../model/user.request.model";
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
  } catch (err) {
    console.log("[UserController][getAllUsers] unable to search users", err);
    return res.status(500).json({ message: err });
  }
}

/**
 * creates a new user
 * @param req request
 * @param res response
 * @returns The success/failure response
 */
export async function createUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await userService.createUser(req.body as CreateUserRequest);
    return res.status(201).send("New user Created");
  } catch (err) {
    console.log("[UserController][createUser] unable to search users", err);
    return res.status(500).json({ message: err });
  }
}
