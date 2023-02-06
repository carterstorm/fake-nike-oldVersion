import {
    Container,
    FavoriteProduct,
    FavoriteProductDescription,
    FavoriteProductImage,
    FavoriteProductsList
} from "./styled";

export const FavoriteProducts = () => {
    return (
        <Container>
            <FavoriteProductsList>
                <FavoriteProduct>
                    <FavoriteProductImage />
                    <FavoriteProductDescription />
                </FavoriteProduct>
            </FavoriteProductsList>
        </Container >
    );
};