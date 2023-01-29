import { sliderData } from "../../../data/sliderData";

import {
    Arrow,
    Container,
    Wrapper,
    Slide,
    Image,
    ImageContainer,
} from "./styled";

export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </Arrow>
            <Wrapper>
                {sliderData.map(data => (
                    <Slide key={data.id}>
                        <ImageContainer>
                            <Image src={data.image} />
                        </ImageContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right">
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
            </Arrow>
        </Container>
    )
}