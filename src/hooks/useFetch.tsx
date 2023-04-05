import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
const useFetch = (url: string) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean|string|null>();

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        fetchData(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((error) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;