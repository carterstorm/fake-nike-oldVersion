import {
    Button,
    Container,
    Heading,
    Image,
    ImageContainer,
    Item,
    Link,
    LinksContainer,
    List,
} from "./styled";

export const MoreProducts = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List gridNumber={data.fetchData.length}>
                {data.fetchData.map(({ id, persons, image }) => (
                    <Item key={id}>
                        <Link>
                            <ImageContainer>
                                <Image src={image} />
                            </ImageContainer>
                            <LinksContainer>
                                <Button>{persons}</Button>
                                <Button>Pokaż stylizację</Button>
                            </LinksContainer>
                        </Link>
                    </Item>
                ))}
            </List>
        </Container >
    )
};