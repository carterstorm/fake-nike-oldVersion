import styled from "styled-components";

export const StyledArrow = styled.button`
    position: absolute;
    z-index: 1;
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
    background-color: ${({ theme }) => theme.colors.gray};
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    transform: translate(0,-50%);
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightGray};
    }
`;