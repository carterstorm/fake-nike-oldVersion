import { useEffect, useState } from "react";
import { useData } from "../../useData";

import {
    AnnouncmentContainer,
    AnnouncmentHeading,
    AnnouncmentText,
    StyledAnnouncment,
    Wrapper
} from "./styled";

export const Announcment = () => {
    const [announcmentIndex, setAnnouncmentIndex] = useState(0);
    const announcmentEndPoint = "./data/announcmentData.json";
    const data = useData(announcmentEndPoint);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (announcmentIndex === data.fetchData.length - 1) {
                setAnnouncmentIndex(0);
            } else {
                setAnnouncmentIndex(announcmentIndex + 1);
            }
        }, 5 * 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [announcmentIndex, data]);

    return (
        <Wrapper>
            {data.fetchData.map(data => (
                <StyledAnnouncment
                    key={data.id}
                    announcmentIndex={announcmentIndex}>
                    <AnnouncmentContainer>
                        <AnnouncmentHeading>
                            {data.announcmentHeading}
                        </AnnouncmentHeading>
                        <AnnouncmentText>
                            {data.announcmentText}
                        </AnnouncmentText>
                    </AnnouncmentContainer>
                </StyledAnnouncment>
            ))}
        </Wrapper>
    )
}