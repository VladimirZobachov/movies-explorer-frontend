import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main(){
    return (
        <CurrentUserContext.Provider value="1">
            <main className="main">
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
        </CurrentUserContext.Provider>
    );
}
export default Main;