import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useContext} from "react";

function Header(){
    const currentUser = useContext(CurrentUserContext);
    if(currentUser.email){
        const element = <Navigation />;
        return (
            element
        );
    }else{
        const element = <header className="header">
            <ul className="header__navigation">
                <li className="header__navigation-item"><a href="/"><img src={ logo } alt="лого"/></a></li>
                <li className="header__navigation-item header__navigation-item_button-register">
                    <a href="/signup">Регистрация</a>
                </li>
                <li className="header__navigation-item ">
                    <a href="/signin" className="header__navigation-button-signin">Войти</a>
                </li>
            </ul>
        </header>;
        return (
            element
        );
    }

}
export default Header;