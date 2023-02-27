import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray}; 
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
    margin: 0;
    font-size: 14px;
`;