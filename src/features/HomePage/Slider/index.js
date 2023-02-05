import { useState } from "react";
import { Arrow } from "../../../common/Arrow";
import { useSliderData } from "../../../useSliderData";

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

    const sliderData = useSliderData();

    return (
        <Container>
            <Arrow
                direction="left"
                handleClick={handleClick}
            />
            <Wrapper
                slideIndex={slideIndex}
            >
                {sliderData.map(item => {
                    const { id, image, sliderName } = item;
                    return (
                        <Slide key={id}>
                            <SlideContainer>
                                <Image
                                    src={image}
                                />
                                <Text
                                    position={id % 2 === 0 ? "right" : "left"}
                                >
                                    {sliderName}
                                </Text>
                            </SlideContainer>
                        </Slide>
                    );
                })}
            </Wrapper>
            <Arrow
                direction="right"
                handleClick={handleClick}
            />
        </Container >
    )
}