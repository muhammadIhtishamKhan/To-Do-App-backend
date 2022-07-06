import express from "express";
import * as userService from "../service/user.service";

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
