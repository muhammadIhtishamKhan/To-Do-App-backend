import express from "express";
import * as taskService from "../service/task.service";
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
