import axios, { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Secure: FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<string>('/api/auth/secure', { withCredentials: true })
            .then((r: AxiosResponse) => {
                setUsername(r.data);
                setIsLoading(false);
            })
            .catch((err: AxiosError) => {
                setIsLoading(false);
                if (err.response?.status === 403) {
                    if (err.response?.headers.location) {
                        navigate(err.response?.headers.location);
                    }
                }
                else {
                    alert('Something went wrong');
                }
            });
    }, [navigate])

    const logoutHandler = () => {
        axios.delete('/api/auth/logout', { withCredentials: true })
            .then((r: AxiosResponse) => {
                
            })
            .catch((err: AxiosError) => {
                console.error(err);
                alert("Could not logout");
            });
    };

    return (
        <>
            {isLoading ?
                <h2>Loading</h2> :
                <>
                    <h2>Welcome back {username}</h2>
                    <button type='submit' onClick={logoutHandler}>Logout</button>
                </>
            }
        </>
    )
};

export default Secure;