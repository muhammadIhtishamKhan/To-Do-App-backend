import { UserResponse } from "../model/user.response.model";
import { User } from "../model/user.mongoose.model";

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
  } catch (err) {
    console.error("[UserService][getAllUsers] unable to get users", err);
    // throw new Error(err.message);
  }
}
