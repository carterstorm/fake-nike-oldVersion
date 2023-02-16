import styled, { css } from "styled-components";

export const Container = styled.section`
    width: 95%;
    margin: 40px auto;
`;

export const Heading = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin: 25px 0;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
`;

export const Item = styled.li`
    margin-right: 20px;

    ${({ last }) => last && css`
        margin-right: 0;
    `}

    &:hover {
        cursor: pointer;
    }
`;

export const Link = styled.a`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
`;

export const Image = styled.img`
    width: 31vw;
    height: 31vw;
    object-fit: cover;

    ${({ size }) => size && css`
        height: 22vw;
    `}
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0 30px 0;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h4`
    margin: 0;
    font-weight: 700;
`;

export const Category = styled.p`
    margin: 5px 0 0 0;
`;

export const PriceContainer = styled.div`
    margin-right: 15px;
`;

export const Price = styled.span`
    font-weight: 700;
`;

export const SportName = styled.h4`
    font-size: 20px;
    font-weight: 400;
    padding: 20px 0;
    margin: 0;
`;