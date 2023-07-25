import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "../../features/HomePage";
import { Announcment } from "../../common/Announcment";
import {
    Nav,
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
        <>
            <Nav>
                <Logo>#fake_nike.</Logo>
                <List>
                    <Item>
                        <StyledNavLink to={'/homepage'}>
                            Home
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to={'/women'}>
                            Kobiety
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to={'/men'}>
                            Mężczyźni
                        </StyledNavLink>
                    </Item>
                    <Item last>
                        <StyledNavLink to={'/kids'}>
                            Dzieci
                        </StyledNavLink>
                    </Item>
                </List>

                <NavigationSection>
                    <Client>
                        <UserOption>Logowanie</UserOption>
                        <UserOption>Rejestracja</UserOption>
                    </Client>
                    <Languages>
                        <LanguageButton>EN</LanguageButton>
                        <LanguageButton
                            last
                        >PL</LanguageButton>
                    </Languages>
                </NavigationSection>
            </Nav >

            <Announcment />

            <Switch>
                <Route path={"/homepage"}>
                    <HomePage />
                </Route>
                <Route path={"/women"}>

                </Route>
                <Route path={"/men"}>

                </Route>
                <Route path={"/kids"}>

                </Route>
                <Route path="/">
                    <Redirect to={"/homepage"} />
                </Route>

            </Switch>
        </>
    )
};