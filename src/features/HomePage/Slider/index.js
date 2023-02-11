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
    const sliderEndPoint = "./data/sliderData.json";
    const [slideIndex, setSlideIndex] = useState(0);
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
        <Container>
            <Arrow
                direction="left"
                handleClick={handleClick}
            />
            <Wrapper
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
            </Wrapper>
            <Arrow
                direction="right"
                handleClick={handleClick}
            />
        </Container >
    )
};