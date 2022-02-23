import axios from "axios";
import { FC, useEffect } from "react";

const Secure: FC = (): JSX.Element => {
    useEffect(() => {
        axios.get('/api/auth/validate', { withCredentials: true })
            .then(r => console.log(r));
    }, [])

    return (
        <>
        </>
    )
};

export default Secure;