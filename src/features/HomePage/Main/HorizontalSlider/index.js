import {
    Container,
    Heading,
    Image,
    ImageContainer,
    Item,
    List,
    Link,
    Description,
    ProductContainer,
    Title,
    Category,
    PriceContainer,
    Price,
    SportName
} from "./styled";

export const HorizontalSlider = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List>
                {data.fetchData.map(({ id, description, category, image, price, sportName }, index) => {
                    return (
                        <Item
                            key={id}
                            last={(data.fetchData.length - 1 === index) ? true : false}
                        >
                            <Link>
                                <ImageContainer>
                                    <Image
                                        src={image}
                                        size={sportName}
                                    />
                                </ImageContainer>
                                <ProductContainer>
                                    {price && (
                                        <>
                                            <Description>
                                                <Title>{description}</Title>
                                                <Category>{category}</Category>
                                            </Description>
                                            <PriceContainer>
                                                <Price>{price} zł</Price>
                                            </PriceContainer>
                                        </>
                                    )}

                                    {sportName && (
                                        <SportName>{sportName}</SportName>
                                    )}
                                </ProductContainer>
                            </Link>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
};