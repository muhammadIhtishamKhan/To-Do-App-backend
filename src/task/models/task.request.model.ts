export interface CreateTaskRequest {
  title: string;
  description: string;
  username: string;
}

export interface UpdateTaskRequest {
  _id: string;
  title: string;
  description?: string;
}

export interface TaskUpdateBody {
  title: string;
  description?: string;
}
