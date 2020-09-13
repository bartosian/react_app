import { useState, useEffect } from 'react';

export default httpClient => {
    const [error, setError] = useState(null);
        useEffect(() => {
            axios.interceptors.request.use(req => {
                setError(null);

                return req;
            });
            httpClient.interceptors.response.use(res => res, err => {
                setError(err);

                return
            })
        }, []);

        const errorConfirmedError = () => {
            setError(null);
        }

        return [error, errorConfirmedError];
}