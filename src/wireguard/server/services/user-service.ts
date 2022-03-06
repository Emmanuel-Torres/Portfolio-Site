import User from "../models/user"
import bcrypt from "bcrypt";
import dbService from "./db-service";

const saltRounds = 10;

const addUser = async (user: User) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password.toString(), salt);
    await dbService.addUser(user.name, hash, salt);
}

const userService = {
    addUser
}

export default userService;