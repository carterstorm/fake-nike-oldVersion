import {
    AnnouncmentContainer,
    AnnouncmentHeading,
    AnnouncmentText,
    StyledAnnouncment,
    Wrapper
} from "./styled";
import { announcmentData } from "../../data/announcmentData";
import { useEffect, useState } from "react";


export const Announcment = () => {
    const [announcmentIndex, setAnnouncmentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (announcmentIndex === announcmentData.length - 1) {
                setAnnouncmentIndex(0);
            } else {
                setAnnouncmentIndex(announcmentIndex + 1);
            }
        }, 5 * 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [announcmentIndex]);

    return (
        <Wrapper>
            {announcmentData.map(data => (
                <StyledAnnouncment key={data.id} announcmentIndex={announcmentIndex}>
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