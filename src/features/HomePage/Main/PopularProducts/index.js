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
    return (
        <Container>
            <Heading>Popularne w tym tygodniu</Heading>
            <List>
                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductContainer>
                            <Description>
                                <Title>Nike Zoom Flex</Title>
                                <Category>Buty do biegania</Category>
                            </Description>
                            <PriceContainer>
                                <Price>399,00 zł</Price>
                            </PriceContainer>
                        </ProductContainer>
                    </Link>
                </Item>

                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductContainer>
                            <Description>
                                <Title>Nike Zoom Flex</Title>
                                <Category>Buty do biegania</Category>
                            </Description>
                            <PriceContainer>
                                <Price>399,00 zł</Price>
                            </PriceContainer>
                        </ProductContainer>
                    </Link>
                </Item>

                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductContainer>
                            <Description>
                                <Title>Nike Zoom Flex</Title>
                                <Category>Buty do biegania</Category>
                            </Description>
                            <PriceContainer>
                                <Price>399,00 zł</Price>
                            </PriceContainer>
                        </ProductContainer>
                    </Link>
                </Item>

                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductContainer>
                            <Description>
                                <Title>Nike Zoom Flex</Title>
                                <Category>Buty do biegania</Category>
                            </Description>
                            <PriceContainer>
                                <Price>399,00 zł</Price>
                            </PriceContainer>
                        </ProductContainer>
                    </Link>
                </Item>
                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/4925867/pexels-photo-4925867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>

                        <ProductContainer>
                            <Description>
                                <Title>Nike Zoom Flex</Title>
                                <Category>Buty do biegania</Category>
                            </Description>
                            <PriceContainer>
                                <Price>399,00 zł</Price>
                            </PriceContainer>
                        </ProductContainer>
                    </Link>
                </Item>
            </List>
        </Container>
    );
};