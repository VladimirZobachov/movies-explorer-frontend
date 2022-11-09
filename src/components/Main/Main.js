import Promo from "./Promo";
import AboutProject from "./AboutProject";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

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