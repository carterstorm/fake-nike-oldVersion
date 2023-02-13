import {
    Container,
    Heading,
    Image,
    ImageContainer,
    Item,
    Link,
    LinksContainer,
    List,
    MenuItem,
    Stylization,
} from "./styled";

export const ExtraContent = () => {
    return (
        <Container>
            <Heading>Odkryj więcej produktów</Heading>
            <List>
                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/2468344/pexels-photo-2468344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>
                        <LinksContainer>
                            <MenuItem>Kobiety</MenuItem>
                            <Stylization>Pokaż stylizację</Stylization>
                        </LinksContainer>
                    </Link>
                </Item>

                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/2468344/pexels-photo-2468344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>
                        <LinksContainer>
                            <MenuItem>Kobiety</MenuItem>
                            <Stylization>Pokaż stylizację</Stylization>
                        </LinksContainer>
                    </Link>
                </Item>

                <Item>
                    <Link>
                        <ImageContainer>
                            <Image src="https://images.pexels.com/photos/2468344/pexels-photo-2468344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ImageContainer>
                        <LinksContainer>
                            <MenuItem>Kobiety</MenuItem>
                            <Stylization>Pokaż stylizację</Stylization>
                        </LinksContainer>
                    </Link>
                </Item>
            </List>
        </Container>
    )
};