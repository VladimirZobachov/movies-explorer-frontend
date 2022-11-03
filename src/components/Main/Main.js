import Promo from "./Promo";
import AboutProject from "./AboutProject";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Main(){
    return (
        <CurrentUserContext.Provider>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </CurrentUserContext.Provider>
    );
}
export default Main;