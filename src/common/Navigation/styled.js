import styled from "styled-components";

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const Logo = styled.a`
    padding: 0 0 0 30px;
    font-size: 30px;
    font-style: italic;
    cursor: pointer;
`;

export const NavigationList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const NavigationItem = styled.li`
    display: flex;
    justify-content: center;
    min-width: 125px;
    border-right: ${({ last }) => last ? "" : "1px solid black"};
`;

export const NavigationItemLink = styled.a`
    cursor: pointer;
`;

export const NavigationSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px 0 0;
`;

export const ClientSection = styled.div`
    margin-right: 30px;
`;

export const UserOption = styled.a`
    cursor: pointer;
    margin: 0 15px;
`;

export const Languages = styled.div`
`;

export const LanguageButton = styled.button`
    padding: 0 5px;
    background-color: transparent;
    border: none;
    border-right: ${({ last }) => last ? "" : "1px solid black"};
    cursor: pointer;
`;