import {
    StyledNavigation,
    Logo,
    List,
    Item,
    Client,
    LanguageButton,
    NavigationSection,
    ItemLink,
    Languages,
    UserOption
} from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigation>

            <Logo>#lumpShop.</Logo>

            <List>
                <Item>
                    <ItemLink>Kobiety</ItemLink>
                </Item>
                <Item>
                    <ItemLink>Mężczyźni</ItemLink>
                </Item>
                <Item last>
                    <ItemLink>Dzieci</ItemLink>
                </Item>
            </List>

            <NavigationSection>
                <Client>
                    <UserOption>Logowanie</UserOption>
                    <UserOption>Rejestracja</UserOption>
                </Client>
                <Languages>
                    <LanguageButton>EN</LanguageButton>
                    <LanguageButton last>PL</LanguageButton>
                </Languages>
            </NavigationSection>

        </StyledNavigation>
    )
};