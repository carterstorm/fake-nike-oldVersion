import { useData } from "../../../useData";
import { ExtraContent } from "./ExtraContent";
import { ArrowSlider } from "./ArrowSlider";
import { HorizontalSlider } from "./HorizontalSlider";
import { StyledMain } from "./styled";

export const Main = () => {

    const popularProductsEndPoint = "./data/popularProducts.json";
    const popularData = useData(popularProductsEndPoint);

    const sportNameEndPoint = "./data/sportNameCategory.json";
    const searchBySportData = useData(sportNameEndPoint);

    const moreProductsEndPoint = "./data/moreProductsData.json";
    const moreProducts = useData(moreProductsEndPoint);

    const trainingDataEndPoint = "./data/trainingData.json";
    const trainingData = useData(trainingDataEndPoint);


    return (
        <StyledMain>
            <ArrowSlider />
            <HorizontalSlider title={"Popularne w tym tygodniu"} data={popularData} />
            <ExtraContent title={"Odkryj więcej produktów"} data={moreProducts} />
            <HorizontalSlider title={"Przeglądaj wg dyscypilny sportu"} data={searchBySportData} />
            <ExtraContent title={"Trenuj z nami i dbaj o siebie"} data={trainingData} />
            <ArrowSlider title={"Członkowstwo Nike"} />
        </StyledMain>
    );
};