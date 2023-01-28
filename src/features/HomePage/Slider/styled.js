import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 70vh;
    width: 100%;
`;

export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    width: 35px;
    height: 35px;
    background-color: #ddd;
    border-radius: 50%;
    left: ${({ left }) => left ? "" : "20px"};
    right: ${({ right }) => right ? "" : "20px"};
`