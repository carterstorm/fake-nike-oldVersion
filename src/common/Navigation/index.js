import {
    Navigation,
    NavigationLogo,
    NavigationList,
    NavigationItem,
    NavigationLanguage,
    NavigationLanguageButton
} from "./styled";

export const StyledNavigation = () => {
    return (
        <Navigation>
            <NavigationLogo />
            <NavigationList>
                <NavigationItem>Item 1</NavigationItem>
                <NavigationItem>Item 2</NavigationItem>
                <NavigationItem>Item 3</NavigationItem>
                <NavigationItem>Item 4</NavigationItem>
            </NavigationList>
            <NavigationLanguage>
                <NavigationLanguageButton>EN</NavigationLanguageButton>
                <NavigationLanguageButton>PL</NavigationLanguageButton>
            </NavigationLanguage>
        </Navigation>
    )
};