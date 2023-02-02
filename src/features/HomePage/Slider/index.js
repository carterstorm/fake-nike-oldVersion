import { useState } from "react";

import { Arrow } from "../../../common/Arrow";
import { sliderData } from "../../../data/sliderData";

import {
    Container,
    Wrapper,
    Slide,
    Image,
    SlideContainer,
    Text,
} from "./styled";

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderData.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderData.length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow
                direction="left"
                handleClick={handleClick}
            />
            <Wrapper
                slideIndex={slideIndex}>
                {sliderData.map(data => (
                    <Slide key={data.id}>
                        <SlideContainer>
                            <Image
                                src={data.image}
                            />
                            <Text
                                position={data.id % 2 === 0 ? "right" : "left"}
                            >
                                {data.sliderName}
                            </Text>
                        </SlideContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow
                direction="right"
                handleClick={handleClick}
            />
        </Container>
    )
}