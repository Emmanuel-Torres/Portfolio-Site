import axios, { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Secure: FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<string>('/api/auth/secure', { withCredentials: true })
            .then(r => {
                setUsername(r.data);
                setIsLoading(false);
            })
            .catch((err: AxiosError) => {
                console.error(err);
                if (err.response?.status === 403) {
                    navigate('/login');
                }
                else {
                    alert('Something went wrong');
                }
            });
    }, [navigate])

    return (
        <>
            {isLoading ? <h2>Loading</h2> : <h2>Welcome back {username}</h2>}
        </>
    )
};

export default Secure;