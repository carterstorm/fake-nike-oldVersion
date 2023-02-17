import { useData } from "../../useData";
import { useAnnouncmentEffect } from "../../useAnnouncmentEffect";

import {
    AnnouncmentContainer,
    AnnouncmentHeading,
    AnnouncmentText,
    StyledAnnouncment,
    Wrapper
} from "./styled";

export const Announcment = () => {

    const announcmentEndPoint = "./data/announcmentData.json";
    const data = useData(announcmentEndPoint);
    const announcmentIndex = useAnnouncmentEffect(data, 5);

    return (
        <Wrapper>
            {data.fetchData.map(({ id, announcmentHeading, announcmentText }) => (
                <StyledAnnouncment
                    key={id}
                    announcmentIndex={announcmentIndex}>
                    <AnnouncmentContainer>
                        <AnnouncmentHeading>
                            {announcmentHeading}
                        </AnnouncmentHeading>
                        <AnnouncmentText>
                            {announcmentText}
                        </AnnouncmentText>
                    </AnnouncmentContainer>
                </StyledAnnouncment>
            ))}
        </Wrapper>
    )
}