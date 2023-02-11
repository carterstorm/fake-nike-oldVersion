import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState({
        state: "loading",
        fetchData: [],
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("./data/sliderData.json");
                const data = response.data;

                setData({
                    state: "success",
                    fetchData: data,
                });

            } catch (error) {
                setData({
                    state: "error",
                    fetchData: [],
                });
            };
        };
        setTimeout(getData, 0 * 1000);
    }, []);

    return data;
};