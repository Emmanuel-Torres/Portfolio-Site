const bcrypt = require('bcrypt');
const { dbService } = require('./db-service');
const saltRounds = 100;

const addUser = async (user) => {
    console.log(user);

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

    await bcrypt.genSalt(saltRounds, async (err, salt) => {
        console.log(salt);
        await bcrypt.hash(user.password, salt, async (err, hash) => {
            console.log(hash);
            await dbService.addUser(user.username, hash, salt);
        })
    })
}

module.exports.userService = {
    addUser
}