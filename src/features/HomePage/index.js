import { Footer } from "./Footer";
import { Main } from "./Main"
import { Motivation } from "./Motivation"
import { Slider } from "./Slider"

export const HomePage = () => {
    return (
        <>
            <Motivation />
            <Slider />
            <Main />
            <Footer />
        </>
    );
};