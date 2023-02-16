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
    Paragraph,
    TrainingContainer,
} from "./styled";

export const ExtraContent = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List gridNumber={data.fetchData.length}>
                {data.fetchData.map(({ id, persons, image, paragraph, nikeButton }) => (
                    <Item key={id}>
                        <Link>
                            {persons && (
                                <>
                                    <ImageContainer>
                                        <Image src={image} />
                                    </ImageContainer>
                                    <LinksContainer>
                                        <Button>{persons}</Button>
                                        <Button>Pokaż stylizację</Button>
                                    </LinksContainer>
                                </>
                            )}
                            {nikeButton && (
                                <>
                                    <ImageContainer>
                                        <Image src={image} height={300} />
                                    </ImageContainer>
                                    <TrainingContainer>
                                        <Paragraph>{paragraph}</Paragraph>
                                        <Button>{nikeButton}</Button>
                                    </TrainingContainer>
                                </>
                            )}
                        </Link>
                    </Item>
                ))}
            </List>
        </Container >
    )
};