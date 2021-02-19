import User from "../model/user";
import { encrypt } from "../utils/password_handler";
export const register_user = async (newUser) => {
  try {
    // Check if the user exists
    const userExist = await User.findOne({
      email: newUser.email,
    });
    if (userExist) {
      throw `User with email ${newUser.email} already exists`;
    }

    // Generate the hash
    newUser.hash = await encrypt(newUser.password);
    const user = new User(newUser);
    return await user.save();
  } catch (error) {
    throw error;
  }
};
