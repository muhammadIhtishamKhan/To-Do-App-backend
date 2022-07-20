import express from "express";
import { send } from "process";
import * as taskService from "../service/task.service";

/**
 * Get all the tasks associated with the user's account
 * @param req unique username for the user
 * @param res
 * @returns
 */
export async function getTasksForUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    const tasks = await taskService.getTasksForUser(req.params.username);
    return res.status(200).json(tasks);
  } catch (err: any) {
    console.error(
      "[TaskController][getTaskForUser] Failed to get tasks for the users.",
      err
    );
    return res.status(500).send({ message: err.toString() });
  }
}

/**
 * create task for user
 * @param req
 * @param res
 * @returns
 */
export async function createTaskForUser(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await taskService.createTaskForUser(req.body);
    return res.status(201).send("Task created for user " + req.body.username);
  } catch (err: any) {
    console.error(
      "[TaskController][createTaskForUser] Failed to create task for the user: " +
        req.params.username +
        err
    );
    return res.status(500).send({ message: err.toString() });
  }
}

/**
 * update task information
 * @param req
 * @param res
 */
export async function updateTask(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await taskService.updateTask(req.params.username, req.body);
    return res.status(204).send("Task Update");
  } catch (err: any) {
    console.error(
      "[TaskController][updateTask] Failed to update task for the user: " +
        req.params.username
    );
    return res.send(500).send({ message: err.toString() });
  }
}

/**
 * Deletes task for the user
 * @param req
 * @param res
 * @returns
 */
export async function deleteTask(
  req: express.Request,
  res: express.Response
): Promise<express.Response> {
  try {
    await taskService.deleteTask(req.params.id);
    return res.status(204).send("User Deleted");
  } catch (err: any) {
    console.error(
      "[TaskController][deleteTask] Failed to delete task for the user"
    );
    return res.send(500).send({ message: err.toString() });
  }
}
