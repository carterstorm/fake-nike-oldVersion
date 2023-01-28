import { Arrow, Container } from "./styled"

export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </Arrow>
            <Arrow direction="right">
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
            </Arrow>
        </Container>
    )
}