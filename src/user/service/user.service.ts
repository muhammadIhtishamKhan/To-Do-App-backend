import { UserResponse } from "../model/user.response.model";
import { User } from "../model/user.mongoose.model";
import { CreateUserRequest } from "../model/user.request.model";
import { UserExists } from "../model/user.response.model";
/**
 * gets all users present in the users collection
 * @returns response from the Database
 */
export async function getAllUsers(): Promise<UserResponse[] | void> {
  try {
    const users = await User.find({});

    if (!users) {
      throw new Error("No users exist!");
    }

    const response: Array<UserResponse> = users.map((user) => {
      const userObject: UserResponse = {
        _id: user._id.toString(),
        email: user.email,
        username: user.username,
      };
      return userObject;
    });
    return response;
  } catch (err: any) {
    console.error("[UserService][getAllUsers] unable to get users", err);
    throw new Error(err.message);
  }
}

/**
 * creates a new user after checking whether a user already exists or not. If
 * the user already exists function will throw an error, if the user already
 * does not exist then function will create a new user
 * @param body
 */
export async function createUser(body: CreateUserRequest): Promise<void> {
  try {
    const userExists = await existsByUsername(body.username);
    if (userExists.exists) {
      throw new Error(
        "User already exists for this username. Username should be unique"
      );
    }
    console.log(
      "[UserService][createUser] creating on boarding survey for user",
      body
    );
    await User.create(body);
  } catch (err: any) {
    console.error("[UserService][CreateUser] unable to create user", err);
    throw new Error(err.message);
  }
}

/**
 * checks if the username already exists
 * @param username username of the user
 * @returns a promise which has the value of whether the username exists or not
 */
export async function existsByUsername(username: string): Promise<UserExists> {
  try {
    const existsResult = await User.findOne({ username });
    if (existsResult) {
      return {
        exists: true,
      };
    }
    return {
      exists: false,
    };
  } catch (err: any) {
    console.error("[UserService][existsByUsername] unable to get user", err);
    throw new Error(err.message);
  }
}
