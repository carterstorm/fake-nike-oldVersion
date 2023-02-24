import {
    Container,
    Heading,
    Image,
    ImageContainer,
    Item,
    List,
    Link,
    SportName,
    Box
} from "./styled";

export const ProductsBySportName = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List>
                {data.fetchData.map(({ id, image, sportName }, index) => {
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
                                <Box>
                                    <SportName>{sportName}</SportName>
                                </Box>
                            </Link>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
};