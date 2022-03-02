import axios from "axios";

const apiUrl = '/api';

type user = {
    username: string,
    password: string,
    rePassword: string
}

const addUser = async (user: user) => {
    await axios.post(apiUrl + '/user/adduser', { user });
}

const userApiService = {
    addUser
}

export default userApiService;