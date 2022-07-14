import express from "express";
import { TaskResponse } from "../models/task.response.model";
import { Task } from "../models/task.mongoose.model";
import { UserResponse } from "../../user/model/user.response.model";
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
        });
        return {
          _id: task._id.toString(),
          title: task.title!,
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
