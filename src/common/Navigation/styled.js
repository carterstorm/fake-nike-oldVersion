import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    justify-content: space-around;
    align-items: center;
    height: 65px;
`;

export const Logo = styled.h1`
    margin: 0 0 0 20px;
`;


export const List = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
`;

export const Item = styled.li`
    width: 100px;
    display: flex;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
`;

export const NavigationSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Client = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserOption = styled.a`
    margin: 0 5px;
`;

export const Languages = styled.div`
`;

export const LanguageButton = styled.button`
    padding: 0 10px;
    background-color: transparent;
    border: none;
    border-right: ${({ last }) => last ? "" : "1px solid black"};
    cursor: pointer;
`;