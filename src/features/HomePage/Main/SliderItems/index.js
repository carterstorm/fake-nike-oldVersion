import {
    Description,
    Image,
    Item,
    List,
    Number
} from "./styled";

export const SliderItems = ({ currentIndex, dataElements, dataLength, imagesToDisplay }) => {
    return (
        <List>
            <Number>
                {currentIndex + 1}/{dataLength}
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
            {dataLength > 0 ? (
                <Description>
                    {dataElements[currentIndex].description}
                </Description>
            ) : null}

        </List>
    )
};