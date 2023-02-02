import { StyledArrow } from "./styled";

export const Arrow = ({ direction, handleClick }) => {
    if (direction === "left") {
        return (
            <StyledArrow
                direction={direction}
                onClick={() => handleClick("left")}
            >
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </StyledArrow>
        );
    }
    return (
        <StyledArrow
            direction={direction}
            onClick={() => handleClick("right")}
        >
            <span className="material-symbols-outlined">
                chevron_right
            </span>
        </StyledArrow>
    );
};