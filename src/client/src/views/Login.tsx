import axios, { AxiosError, AxiosResponse } from "axios";
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

    const secureHandler = () => {
        axios.get<AxiosResponse>('/api/auth/validate', { withCredentials: true })
            .then(r => console.log(r))
            .catch(err => {
                console.log("hello");
                console.log(err);
            });
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/auth/login', { username, password })
            .catch((err: AxiosError) => {
                console.log(err);
                if (err.response) {
                    console.log(err.response);
                }
            })
            .then(r => console.log('success', r))
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
            <button type='button' onClick={secureHandler}>Secure</button>
        </>
    )
}

export default Login;