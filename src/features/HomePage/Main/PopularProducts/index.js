import { useData } from "../../../../useData";
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
    Price
} from "./styled";

export const PopularProducts = () => {

    const popularProductsEndPoint = "./data/popularProducts.json";
    const data = useData(popularProductsEndPoint);

    return (
        <Container>
            <Heading>Popularne w tym tygodniu</Heading>
            <List>
                {data.fetchData.map(({ id, description, category, image, price }) => (
                    <Item key={id}>
                        <Link>
                            <ImageContainer>
                                <Image src={image} />
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
    );
};