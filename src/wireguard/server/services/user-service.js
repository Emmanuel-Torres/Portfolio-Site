const bcrypt = require('bcrypt');
const { dbService } = require('./db-service');
const saltRounds = 10;

const addUser = async (user) => {
    if (!(user) ||
        !(user.username) ||
        !(user.password) ||
        !(user.rePassword) ||
        user.username.trim().length < 5 ||
        user.password.trim().length < 8 ||
        user.password != user.rePassword
    ) {
        throw 400;
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password, salt);
    await dbService.addUser(user.username, hash, salt);
}

module.exports.userService = {
    addUser
}