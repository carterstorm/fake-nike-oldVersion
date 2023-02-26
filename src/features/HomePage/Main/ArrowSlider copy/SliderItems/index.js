import { Description, Image, Item, List, Number } from "../styled";

export const SliderItems = ({ currentIndex, favoriteProductsData, favoriteProductsLength, imagesToDisplay }) => {
    return (
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
    )
};