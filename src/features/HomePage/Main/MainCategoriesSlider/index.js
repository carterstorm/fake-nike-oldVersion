import { useState } from "react";

import {
    Container,
    Heading,
} from "./styled";

import { Arrow } from "../../../../common/Arrow";
import { SliderItems } from "./SliderItems";

export const MainCategoriesSlider = ({ title, data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const dataLength = data.fetchData.length;
    const dataElements = data.fetchData;

    const imagesToDisplay = () => [
        dataElements[(currentIndex + dataLength - 2) % dataLength],
        dataElements[(currentIndex + dataLength - 1) % dataLength],
        dataElements[currentIndex],
        dataElements[(currentIndex + 1) % dataLength],
        dataElements[(currentIndex + 2) % dataLength]
    ];

    const handlePrevClick = () => {
        currentIndex - 1 < 0 ? setCurrentIndex(dataLength - 1) : setCurrentIndex(currentIndex - 1)
    }

    const handleNextClick = () => {
        currentIndex + 1 === dataLength ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

    return (
        <Container>
            {title && (
                <Heading>{title}</Heading>
            )}
            <Arrow
                direction="left"
                handleClick={handlePrevClick}
            />
            <SliderItems
                currentIndex={currentIndex}
                dataElements={dataElements}
                dataLength={dataLength}
                imagesToDisplay={imagesToDisplay}
            />
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
};