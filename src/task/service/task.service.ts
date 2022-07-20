import { TaskResponse } from "../models/task.response.model";
import {
  UpdateTaskRequest,
  TaskUpdateBody,
} from "../models/task.request.model";
import { Task } from "../models/task.mongoose.model";
import { CreateTaskRequest } from "../models/task.request.model";
import mongoose from "mongoose";
/**
 * Get all the tasks associated with the user's account
 * @param username unique username for the user
 * @returns
 */
export async function getTasksForUser(
  username: string
): Promise<TaskResponse[] | void> {
  try {
    const findTask = await Task.find({ username: username });
    if (findTask.length === 0) {
      throw new Error(`There are no tasks for the user: ${username}`);
    } else {
      const tasks: TaskResponse[] = findTask.map((task) => {
        const dateAdded = task.dateAdded!.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
        });
        return {
          _id: task._id.toString(),
          title: task.title,
          description: task.description,
          dateAdded: dateAdded,
        };
      });
      return tasks;
    }
  } catch (err: any) {
    console.error(
      "[TaskService][getTasksForUser] Failed to get tasks for user!",
      err
    );
    throw new Error(err.message);
  }
}

/**
 * creates tasks for user
 * @param username unique username for the user
 * @param body request body
 */
export async function createTaskForUser(
  body: CreateTaskRequest
): Promise<void> {
  try {
    await Task.create(body);
  } catch (err: any) {
    console.error(
      "[TaskService][createTaskForUser] Failed to create tasks for user!",
      err
    );
    throw new Error(err.message);
  }
}

/**
 * Updates task information for the user
 * @param username username of the user for whom the task is being updated
 * @param body request body
 */
export async function updateTask(
  username: string,
  body: UpdateTaskRequest
): Promise<void> {
  try {
    const id = body._id;
    const updateBody: TaskUpdateBody = {
      title: body.title,
      description: body.description,
    };
    await Task.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      updateBody
    );
    console.log(
      "[TaskService][updateTask] Task information has been update",
      body
    );
  } catch (err: any) {
    console.error(
      "[TaskService][updateTask] Failed to task tasks for user!",
      err
    );
    throw new Error(err.message);
  }
}

/**
 * Deletes a task for the user
 * @param id id of the task to be deleted
 */
export async function deleteTask(id: string): Promise<void> {
  try {
    await Task.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  } catch (err: any) {
    console.error(
      "[TaskService][deleteTask] Failed to task tasks for user!",
      err
    );
    throw new Error(err.message);
  }
}
