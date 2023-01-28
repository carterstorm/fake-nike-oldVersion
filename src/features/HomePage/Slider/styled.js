import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 70vh;
    width: 100%;
`;

export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    width: 35px;
    height: 35px;
    background-color: #ddd;
    border-radius: 50%;
    left: ${({ direction }) => direction === "left" && "20px"};
    right: ${({ direction }) => direction === "right" && "20px"};
`