import {
    Button,
    Container,
    Heading,
    Image,
    ImageContainer,
    Item,
    Link,
    List,
    Paragraph,
    TrainingContainer,
} from "./styled";

export const JoinToClub = ({ title, data }) => {
    return !!data && (
        <Container>
            <Heading>{title}</Heading>
            <List gridNumber={data.fetchData.length}>
                {data.fetchData.map(({ id, persons, image, paragraph, nikeButton }) => (
                    <Item key={id}>
                        <Link>
                            <ImageContainer>
                                <Image src={image} height={300} />
                            </ImageContainer>
                            <TrainingContainer>
                                <Paragraph>{paragraph}</Paragraph>
                                <Button>{nikeButton}</Button>
                            </TrainingContainer>
                        </Link>
                    </Item>
                ))}
            </List>
        </Container >
    )
};