import { useState } from "react";
import { Arrow } from "../../../common/Arrow";
import { useData } from "../../../useData";

import {
    Container,
    Wrapper,
    Slide,
    Image,
    Text,
} from "./styled";

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderEndPoint = "./data/sliderData.json";
    const data = useData(sliderEndPoint);
    const fetchDataLength = data.fetchData.length;

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : fetchDataLength - 1);
        } else {
            setSlideIndex(slideIndex < fetchDataLength - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Wrapper>
            <Arrow
                direction="left"
                handleClick={handleClick}
            />
            <Container
                slideIndex={slideIndex}
            >
                {data.fetchData.map(({ id, image, sliderName }) => (
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
            </Container>
            <Arrow
                direction="right"
                handleClick={handleClick}
            />
        </Wrapper >
    )
};