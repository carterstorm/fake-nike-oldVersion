import axios from "axios";
import { useEffect, useState } from "react";

export const useSliderData = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const getSliderData = async () => {
            try {
                const response = await axios.get("./data/sliderData.json");
                const data = response.data;

                setSliderData(data);

            } catch (error) {
                console.error(error);
            }
        };
        setTimeout(getSliderData, 0 * 1000);
    }, []);

    return sliderData;
};