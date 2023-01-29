import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    height: 65vh;
`;

export const Arrow = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${({ direction }) => direction === "left" && "40px"};
    right: ${({ direction }) => direction === "right" && "40px"};
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
    transition: .3;

    &:hover {
        background-color: #eee;
    }
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
`;

export const ImageContainer = styled.div`
    flex-grow: 1;
    height: 65vh;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
`;