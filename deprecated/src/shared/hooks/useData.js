import { useState, useEffect } from "react";

export default function useData(fetch) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetch()
            .then(responseData => {
                if (!ignore) {
                    setData(responseData);
                }
            });
        return () => {
            ignore = true;
        };
    }, [fetch]);

    return data;
}
