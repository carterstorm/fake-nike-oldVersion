import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    overflow: hidden;
`;

export const FavoriteProductsList = styled.ul`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const FavoriteProduct = styled.li`
    display: flex;
    flex-direction: column;
`;

export const FavoriteProductImage = styled.img`
    width: 500px;
    height: 500px;
    background-color: green;
    border-radius: 15px;
`;

export const FavoriteProductDescription = styled.h3`
    margin: 20px 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
`;