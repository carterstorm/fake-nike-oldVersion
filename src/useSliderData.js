import axios from "axios";
import { useEffect, useState } from "react";

export const useSliderData = () => {
    const [sliderData, setSliderData] = useState({
        state: "loading",
        data: [],
    });

    useEffect(() => {
        const getSliderData = async () => {
            try {
                const response = await axios.get("./data/sliderData.json");
                const data = response.data;

                setSliderData({
                    state: "success",
                    data: data,
                });

            } catch (error) {
                setSliderData({
                    state: "error",
                    data: [],
                });
            };
        };
        setTimeout(getSliderData, 0 * 1000);
    }, []);

    return sliderData;
};