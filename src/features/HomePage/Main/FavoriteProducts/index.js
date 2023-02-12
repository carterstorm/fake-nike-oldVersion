import { useState } from "react";

import {
    Container,
    FavoriteProduct,
    FavoriteProductDescription,
    FavoriteProductImage,
    FavoriteProductNumber,
    FavoriteProductsList,
} from "./styled";

import { Arrow } from "../../../../common/Arrow";
import { useData } from "../../../../useData";

export const FavoriteProducts = () => {

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

    const handlePrevClick = () => {
        const newIndex = currentIndex - 1;
        if (newIndex < 0) {
            setCurrentIndex(favoriteProductsLength - 1);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        if (newIndex === favoriteProductsLength) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <Container>
            <Arrow
                direction="left"
                handleClick={handlePrevClick}
            />
            <FavoriteProductsList>
                <FavoriteProductNumber>
                    {currentIndex + 1}/{favoriteProductsLength}
                </FavoriteProductNumber>
                {imagesToDisplay().map((item) => {

                    if (!item) return null;
                    const { id, image } = item;

                    return (
                        <FavoriteProduct key={id}>
                            <FavoriteProductImage src={image} />
                        </FavoriteProduct>
                    )
                })};
                {favoriteProductsLength > 0 ? (
                    <FavoriteProductDescription>
                        {favoriteProductsData[currentIndex].description}
                    </FavoriteProductDescription>
                ) : null}

            </FavoriteProductsList>
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
};