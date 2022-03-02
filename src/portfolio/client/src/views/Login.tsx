import axios, { AxiosError, AxiosResponse } from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    const usernameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const passwordChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/auth/login', { username, password })
            .then((r: AxiosResponse) => {
                alert('Successfully logged in');
                if (r.headers?.location) {
                    navigate(r.headers?.location);
                }
            })
            .catch((err: AxiosError) => {
                console.error(err);
                if (err.response?.status === 401) {
                    alert('Could not log in. Username or password incorrect');
                }
                else {
                    alert('Something went wrong');
                }
            });
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