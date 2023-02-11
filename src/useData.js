import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (endPoint) => {
    const [data, setData] = useState({
        state: "loading",
        fetchData: [],
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(endPoint);
                const data = response.data;

                setData({
                    state: "success",
                    fetchData: data,
                });

            } catch {
                setData({
                    state: "error",
                    fetchData: [],
                });
            };
        };
        setTimeout(getData, 0 * 1000);
    }, [endPoint]);

    return data;
};