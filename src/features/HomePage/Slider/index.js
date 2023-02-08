import { useState } from "react";
import { Arrow } from "../../../common/Arrow";
import { useSliderData } from "../../../useSliderData";

import {
    Container,
    Wrapper,
    Slide,
    Image,
    Text,
} from "./styled";

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const sliderData = useSliderData();

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderData.data.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderData.data.length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow
                direction="left"
                handleClick={handleClick}
            />
            <Wrapper
                slideIndex={slideIndex}
            >

                {sliderData.data.map(({ id, image, sliderName }) => (
                    <Slide key={id}>
                        <Image
                            src={image}
                        />
                        <Text
                            position={id % 2 === 0 ? "right" : "left"}
                        >
                            {sliderName}
                        </Text>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow
                direction="right"
                handleClick={handleClick}
            />
        </Container >
    )
};