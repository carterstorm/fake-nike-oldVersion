import {
    MotivationHeading,
    MotivationQuote,
    MotivationParagraph,
    StyledMotivation,
    MotivationText,
    MotivationCite
} from "./styled";

export const Motivation = () => {
    return (
        <StyledMotivation>
            <MotivationParagraph>
                Przygotuj się na nowe doświadczenia!
            </MotivationParagraph>
            <MotivationHeading>Zacznij działać!</MotivationHeading>
            <MotivationText>
                <MotivationQuote>
                    Najtrudniejsze jest zdecydowanie się na działanie. Reszta to już tylko kwestia wytrwałości.
                </MotivationQuote>
                {" "}- {" "}
                <MotivationCite>Amelia Earhart</MotivationCite>
            </MotivationText>
        </StyledMotivation>
    )
}