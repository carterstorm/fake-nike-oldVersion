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
} from "./styled";

export const PopularProducts = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List>
                {data.fetchData.map(({ id, description, category, image, price }, index) => (
                    <Item
                        key={id}
                        last={(data.fetchData.length - 1 === index) ? true : false}
                    >
                        <Link>
                            <ImageContainer>
                                <Image
                                    src={image}
                                />
                            </ImageContainer>
                            <ProductContainer>
                                <Description>
                                    <Title>{description}</Title>
                                    <Category>{category}</Category>
                                </Description>
                                <PriceContainer>
                                    <Price>{price} zł</Price>
                                </PriceContainer>
                            </ProductContainer>
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    )
};