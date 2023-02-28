import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 182px);
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
    padding-top: 60px;
`;

export const Category = styled.div`
`;

export const Heading = styled.h4`
    margin: 0 0 24px 0;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const Item = styled.li`
    margin: 0 0 12px 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    transition: .3s;
    line-height: 1.45;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;