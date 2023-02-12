import { Container, Heading, Image, ImageContainer, Item, List, ProductCategory, ProductDescription, ProductPrice, ProductTitle, Link } from "./styled";

export const PopularProducts = () => {
    return (
        <Container>
            <Heading>Popularne w tym tygodniu</Heading>
            <List>
                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductDescription>
                            <ProductTitle>Nike Zoom Flex</ProductTitle>
                            <ProductCategory>Buty do biegania</ProductCategory>
                        </ProductDescription>
                        <ProductPrice>399,00 zł</ProductPrice>
                    </Link>
                </Item>
            </List>
        </Container >
    );
};