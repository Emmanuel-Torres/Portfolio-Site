import axios from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";

const Login: FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const usernameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const passwordChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/auth/login', { username, password })
            .then(r => console.log('success', r))
            .catch(err => console.error(err));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input type='text' value={username} onChange={usernameChangedHandler} />
                <label>Password</label>
                <input type='password' value={password} onChange={passwordChangedHandler} />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;