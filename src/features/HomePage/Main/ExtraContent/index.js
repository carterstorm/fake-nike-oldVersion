import {
    Container,
    Heading,
    Image,
    Item,
    Link,
    LinkContainer,
    LinksContainer,
    List,
    MenuItem,
    Stylization
} from "./styled";

export const ExtraContent = () => {
    return (
        <Container>
            <Heading>Odkryj więcej produktów</Heading>
            <List>
                <Item>
                    <Link>
                        <LinkContainer>
                            <Image />
                            <LinksContainer>
                                <MenuItem></MenuItem>
                                <Stylization></Stylization>
                            </LinksContainer>
                        </LinkContainer>
                    </Link>
                </Item>
            </List>
        </Container>
    )
};