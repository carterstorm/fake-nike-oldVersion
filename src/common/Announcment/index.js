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