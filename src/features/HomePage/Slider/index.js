import { useState } from "react";
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
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
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
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
            </Arrow>
        </Container>
    )
}