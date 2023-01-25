import { Redirect, Route, Switch } from "react-router-dom";
import {
    StyledNavigation,
    Logo,
    List,
    Item,
    Client,
    LanguageButton,
    NavigationSection,
    StyledNavLink,
    Languages,
    UserOption
} from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigation>

            <Logo>#lumpShop.</Logo>

            <List>
                <Item>
                    <StyledNavLink to={'/women'}>Kobiety</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={'/men'}>Mężczyźni</StyledNavLink>
                </Item>
                <Item last>
                    <StyledNavLink to={'/kids'}>Dzieci</StyledNavLink>
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

            <Switch>
                <Route path="/">
                    <Redirect to={"/homePage"} />
                </Route>
            </Switch>

        </StyledNavigation >
    )
};