import {
    Wrapper,
    FooterContainer,
    Navigation,
    List,
    Item,
    Aside,
    Container,
    SocialMediaList,
    SocialMediaItem,
    SocialMediaLink,
    SubFooter,
    Copyrights,
    Place,
    Location,
    Image,
    CopyText,
    RegulationsList,
    RegulationItem,
    RegulationLink,
} from "./styled";

export const Footer = () => {
    return (
        <Wrapper>
            <FooterContainer>
                <Navigation>
                    <Aside>
                        <List>
                            <Item>karty upominkowe</Item>
                            <Item>znajdź sklep</Item>
                            <Item>nike journal</Item>
                            <Item>zostań członkiem</Item>
                            <Item>rabat dla studentów</Item>
                            <Item>prześlij opinię</Item>
                            <Item>kody promocyjne</Item>
                        </List>
                    </Aside>

                    <Container>
                        <List>
                            <Item>uzyskaj pomoc</Item>
                            <Item>status zamówienia</Item>
                            <Item>wysyłka i dostawa</Item>
                            <Item>zwroty</Item>
                            <Item>opcje płatności</Item>
                            <Item>skontaktuj się z nami</Item>
                        </List>

                        <List>
                            <Item>o nike</Item>
                            <Item>aktualności</Item>
                            <Item>praca</Item>
                            <Item>inwestorzy</Item>
                            <Item>ochrona środowiska</Item>
                        </List>

                        <List>
                            <Item>dołącz do nas</Item>
                            <Item>nike app</Item>
                            <Item>nike run club</Item>
                            <Item>nike training club</Item>
                            <Item>snkrs</Item>
                        </List>
                    </Container>
                    <SocialMediaList>
                        <SocialMediaItem>
                            <SocialMediaLink>

                            </SocialMediaLink>
                        </SocialMediaItem>

                        <SocialMediaItem>
                            <SocialMediaLink>

                            </SocialMediaLink>
                        </SocialMediaItem>

                        <SocialMediaItem>
                            <SocialMediaLink>

                            </SocialMediaLink>
                        </SocialMediaItem>

                        <SocialMediaItem>
                            <SocialMediaLink>

                            </SocialMediaLink>
                        </SocialMediaItem>

                    </SocialMediaList>
                </Navigation>

                <SubFooter>
                    <Copyrights>
                        <Location>
                            <Image></Image>
                            <Place>Polska</Place>
                        </Location>
                        <CopyText>&copy; 2023 #fakeNike, Inc. Wszelkie prawa zastrzeżone</CopyText>
                    </Copyrights>

                    <RegulationsList>
                        <RegulationItem>
                            <RegulationLink>
                                Przewodniki
                            </RegulationLink>
                        </RegulationItem>

                        <RegulationItem>
                            <RegulationLink>
                                Warunki korzystania
                            </RegulationLink>
                        </RegulationItem>

                        <RegulationItem>
                            <RegulationLink>
                                Regulamin sprzedaży
                            </RegulationLink>
                        </RegulationItem>

                        <RegulationItem>
                            <RegulationLink>
                                Dane firmy
                            </RegulationLink>
                        </RegulationItem>

                        <RegulationItem>
                            <RegulationLink>
                                Polityka prywatności i zasady dotyczące plików cookie
                            </RegulationLink>
                        </RegulationItem>

                        <RegulationItem>
                            <RegulationLink>
                                Ustawienia dotyczące plików cookie
                            </RegulationLink>
                        </RegulationItem>
                    </RegulationsList>
                </SubFooter>

            </FooterContainer>
        </Wrapper>
    )
};