import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background-color: #eee;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd; 
    overflow: hidden;
`;

export const StyledAnnouncment = styled.div`
    transition: 1s ease;
    transform: translateX(${({ announcmentIndex }) => announcmentIndex * (-100)}vw);
`;

export const AnnouncmentContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AnnouncmentHeading = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 18px;
`;

export const AnnouncmentText = styled.p`
    margin: 5px 0;
    font-size: 14px;
`;