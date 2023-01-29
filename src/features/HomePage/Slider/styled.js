import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    height: 65vh;
    overflow: hidden;
`;

export const Arrow = styled.div`
    position: absolute;
    z-index: 2;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${({ direction }) => direction === "left" && "30px"};
    right: ${({ direction }) => direction === "right" && "30px"};
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

export const SlideContainer = styled.div`
    position: relative;
    flex-grow: 1;
    height: 65vh;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Text = styled.p`
    position: absolute;
    top: 100px;
    left: ${({ position }) => position === "left" && "250px"};
    right: ${({ position }) => position === "right" && "300px"};
    z-index: 1;
    font-size: 40px;
    margin: 0;
`;