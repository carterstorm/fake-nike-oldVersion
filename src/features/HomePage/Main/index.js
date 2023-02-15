import { useData } from "../../../useData";
import { ExtraContent } from "./ExtraContent";
import { FavoriteProducts } from "./FavoriteProducts";
import { HorizontalSlider } from "./HorizontalSlider";
import { StyledMain } from "./styled";

export const Main = () => {

    const popularProductsEndPoint = "./data/popularProducts.json";
    const popularData = useData(popularProductsEndPoint);

    const sportNameEndPoint = "./data/sportNameCategory.json";
    const searchBySportData = useData(sportNameEndPoint);

    return (
        <StyledMain>
            <FavoriteProducts />
            <HorizontalSlider title={"Popularne w tym tygodniu"} data={popularData} />
            <ExtraContent />
            <HorizontalSlider title={"Przeglądaj wg dyscypilny sportu"} data={searchBySportData} />
        </StyledMain>
    );
};