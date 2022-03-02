import { ChangeEvent, FC, FormEvent, useState } from "react";
import userApiService from "../services/user-api-service";

const NewUser: FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    const formValid: boolean = (
        username.trim().length > 5 &&
        password.trim().length >= 8 &&
        password.trim() === rePassword.trim()
    )

    const usernameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const passwordChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const rePasswordChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    };

    const SubmitUserHandler = (e: FormEvent) => {
        e.preventDefault();

        if (formValid) {
            userApiService.addUser({ username, password, rePassword })
                .then(r => console.log('success', r))
                .catch(err => console.error(err));
        }
    };

    return (
        <>
            <h2>Add new user</h2>
            <form onSubmit={SubmitUserHandler}>
                <label>Username:</label>
                <input type='text' value={username} onChange={usernameChangedHandler} />
                <label>Password</label>
                <input type='password' value={password} onChange={passwordChangedHandler} />
                <label>Re-type Password</label>
                <input type='password' value={rePassword} onChange={rePasswordChangedHandler} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
};

export default NewUser;