import { sliderData } from "../../../data/sliderData";

import {
    Arrow,
    Container,
    Wrapper,
    Slide,
    Image,
    SlideContainer,
    Text,
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
                        <SlideContainer>
                            <Image src={data.image} />
                            <Text position={data.id % 2 === 0 ? "right" : "left"}>
                                {data.sliderName}
                            </Text>
                        </SlideContainer>
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