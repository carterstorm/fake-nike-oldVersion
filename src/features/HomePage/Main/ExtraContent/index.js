import { useData } from "../../../../useData";
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

    const moreProductsEndPoint = "./data/moreProductsData.json";
    const data = useData(moreProductsEndPoint);

    return (
        <Container>
            <Heading>Odkryj więcej produktów</Heading>
            <List>
                {data.fetchData.map(({ id, description, image }) => (
                    <Item key={id}>
                        <Link>
                            <ImageContainer>
                                <Image src={image} />
                            </ImageContainer>
                            <LinksContainer>
                                <MenuItem>{description}</MenuItem>
                                <Stylization>Pokaż stylizację</Stylization>
                            </LinksContainer>
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    )
};