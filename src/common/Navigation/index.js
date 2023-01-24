import {
    Navigation,
    Logo,
    NavigationList,
    NavigationItem,
    ClientSection as Client,
    LanguageButton,
    NavigationSection,
    NavigationItemLink,
    Languages,
    UserOption
} from "./styled";

export const StyledNavigation = () => {
    return (
        <Navigation>

            <Logo>#lumpShop.</Logo>

            <NavigationList>
                <NavigationItem>
                    <NavigationItemLink>Kobiety</NavigationItemLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationItemLink>Mężczyźni</NavigationItemLink>
                </NavigationItem>
                <NavigationItem last>
                    <NavigationItemLink>Dzieci</NavigationItemLink>
                </NavigationItem>
            </NavigationList>

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

        </Navigation>
    )
};