import {
    Container,
    FavoriteProduct,
    FavoriteProductDescription,
    FavoriteProductImage,
    FavoriteProductsList
} from "./styled";

import { Arrow } from "../../../../common/Arrow";
import { useState } from "react";

export const FavoriteProducts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            id: 1,
            description: "Tekst 1",
            src: "https://img.freepik.com/darmowe-zdjecie/pilkarz-futbolu-amerykanskiego-na-profesjonalnym-stadionie_654080-927.jpg?w=1380&t=st=1675719033~exp=1675719633~hmac=ba345dceb4d2655ffe115e30c8c15bdc919ec95cc26a80abb1235cd1753239f6"
        },
        {
            id: 2,
            description: "Tekst 2",
            src: "https://img.freepik.com/darmowe-wektory/futbol-amerykanski_24877-59658.jpg?w=900&t=st=1675719064~exp=1675719664~hmac=e34cea75aa5961b4020ca106b0750ba2da51f7182000cf76047bae56998a8942"
        },
        {
            id: 3,
            description: "Tekst 3",
            src: "https://img.freepik.com/darmowe-zdjecie/pelny-strzal-mezczyzny-grajacego-w-futbol-amerykanski_23-2149543005.jpg?w=1380&t=st=1675719080~exp=1675719680~hmac=34c70a88b98e40b7b58013c75c735f45b602b7ff858fd03cb408565c1e7a9479"
        },
        {
            id: 4,
            description: "Tekst 4",
            src: "https://img.freepik.com/darmowe-zdjecie/pilkarz-futbolu-amerykanskiego-na-profesjonalnym-stadionie_654080-922.jpg?w=1380&t=st=1675719095~exp=1675719695~hmac=42626a62e3b2dcfc4baa41c21a8c604e6c02535f070a09fd00737c0e5a15e2b4"
        },
        {
            id: 5,
            description: "Tekst 5",
            src: "https://img.freepik.com/darmowe-zdjecie/pilkarz-futbolu-amerykanskiego-na-profesjonalnym-stadionie_654080-947.jpg?w=1380&t=st=1675719105~exp=1675719705~hmac=9c4507cc06935db8a3ea57db768404c40c07bb23107aa18220c3b8200165ef8a"
        },
    ];

    const imagesToDisplay = [
        images[(currentIndex + images.length - 1) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
        images[(currentIndex + 3) % images.length]
    ];

    const handlePrevClick = () => {
        const newIndex = currentIndex - 1;
        if (newIndex < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        if (newIndex === images.length) {
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
                {imagesToDisplay.map(({ id, description, src }) => (
                    <FavoriteProduct key={id}>
                        <FavoriteProductImage src={src} />
                        <FavoriteProductDescription>{description}</FavoriteProductDescription>
                    </FavoriteProduct>
                ))}
            </FavoriteProductsList>
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
};