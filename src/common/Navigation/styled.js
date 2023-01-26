import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const Logo = styled.h1`
    margin: 0;
    padding: 0 0 0 30px;
    font-size: 30px;
    font-style: italic;
    cursor: pointer;
`;

export const List = styled.ul`
    display: flex;
    margin: 0;
    margin-left: 150px;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    min-width: 100px;
    border-right: ${({ last }) => last ? "" : "1px solid black"};
`;

export const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

export const NavigationSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px 0 0;
`;

export const Client = styled.div`
    margin-right: 30px;
`;

export const UserOption = styled.a`
    cursor: pointer;
    margin: 0 10px;
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