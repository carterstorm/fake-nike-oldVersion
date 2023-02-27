import styled from "styled-components";

export const List = styled.ul`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
    display: grid;
    justify-content: center;
    grid-gap: 15px;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`

`;

export const Number = styled.span`
    position: absolute;
    top: 20px;
    right: 40%;
    margin: 0;
    padding: 5px 0;
    text-align: center;
    background-color: rgba(34, 34, 34, 0.5);
    color: rgba(238, 238, 238, 0.9);
    border-radius: 20px;
    width: 50px;
`;

export const Image = styled.img`
    width: 23vw;
    height: 23vw;
    object-fit: cover;
    border-radius: 10px;
    border-radius: ${({ circle }) => circle && "50%"};
`;

export const Description = styled.h3`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 25%);
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
`;