import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    height: 65vh;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    display: flex;
    transform: translateX(${({ slideIndex }) => slideIndex * (-100)}vw);
    transition: 1s ease;
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