import { useState } from "react";

import {
    Container,
    Description,
    Heading,
    Image,
    Item,
    List,
    Number,
} from "./styled";

import { Arrow } from "../../../../common/Arrow";
import { useData } from "../../../../useData";

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
            <List>
                <Number>
                    {currentIndex + 1}/{favoriteProductsLength}
                </Number>
                {imagesToDisplay().map((item) => {

                    if (!item) {
                        return null;
                    }

                    const { id, image } = item;

                    return (
                        <Item key={id}>
                            <Image src={image} />
                        </Item>
                    )
                })};
                {favoriteProductsLength > 0 ? (
                    <Description>
                        {favoriteProductsData[currentIndex].description}
                    </Description>
                ) : null}

            </List>
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
};