import { useEffect, useState } from "react";

export const useAnnouncmentEffect = (data, time) => {
    const [announcmentIndex, setAnnouncmentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (announcmentIndex === data.fetchData.length - 1) {
                setAnnouncmentIndex(0);
            } else {
                setAnnouncmentIndex(announcmentIndex + 1);
            }
        }, time * 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [announcmentIndex, data, time]);

    return announcmentIndex;
};