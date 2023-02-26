import { useState } from "react";

import {
    Container,
    Heading,
} from "./styled";

import { Arrow } from "../../../../common/Arrow";
import { useData } from "../../../../useData";
import { SliderItems } from "./SliderItems";

export const ArrowSlider = ({ title }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const favoriteProductsEndPoint = "./data/favoriteProducts.json";
    const data = useData(favoriteProductsEndPoint);

    const favoriteProductsLength = data.fetchData.length;
    const favoriteProductsData = data.fetchData;

    const imagesToDisplay = () => [
        favoriteProductsData[(currentIndex + favoriteProductsLength - 2) % favoriteProductsLength],
        favoriteProductsData[(currentIndex + favoriteProductsLength - 1) % favoriteProductsLength],
        favoriteProductsData[currentIndex],
        favoriteProductsData[(currentIndex + 1) % favoriteProductsLength],
        favoriteProductsData[(currentIndex + 2) % favoriteProductsLength]
    ];

    const handlePrevClick = () => { currentIndex - 1 < 0 ? setCurrentIndex(favoriteProductsLength - 1) : setCurrentIndex(currentIndex - 1) }

    const handleNextClick = () => { currentIndex + 1 === favoriteProductsLength ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1) }

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
                favoriteProductsData={favoriteProductsData}
                favoriteProductsLength={favoriteProductsLength}
                imagesToDisplay={imagesToDisplay}
            />
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
};