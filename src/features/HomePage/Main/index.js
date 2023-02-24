import { useData } from "../../../useData";
import { ExtraContent } from "./ExtraContent";
import { ArrowSlider } from "./ArrowSlider";
import { StyledMain } from "./styled";
import { PopularProducts } from "./PopularProducts";
import { ProductsBySportName } from "./ProductsBySportName";


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
            <PopularProducts title={"Popularne w tym tygodniu"} data={popularData} />
            <ExtraContent title={"Odkryj więcej produktów"} data={moreProducts} />
            <ProductsBySportName title={"Przeglądaj wg dyscypilny sportu"} data={searchBySportData} />
            <ExtraContent title={"Trenuj z nami i dbaj o siebie"} data={trainingData} />
            <ArrowSlider title={"Członkowstwo Nike"} />
        </StyledMain>
    );
};