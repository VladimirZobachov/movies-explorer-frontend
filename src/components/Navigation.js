import {Route, Switch} from "react-router-dom";
import IconMenu from "../images/icon-menu.svg";

function Navigation(){
    return (
        <Switch>
            <Route exact path="/">
                <li className="header__top-button"><a href="/signup">Регистрация</a></li>
                <li className="header__top-button "><a href="/signin" className="header__top-button_active">Войти</a></li>
            </Route>
            <Route exact path="/movies">
                <li className="header__top-button"><a href="/movies"><b>Фильмы</b></a></li>
                <li className="header__top-button header__top-button_left"><a href="/saved-movies">Сохраненные фильмы</a></li>
                <li className="header__top-button "><a href="/profile" className="header__top-button_profile">Аккаунт</a></li>
                <li className="header__top-button header__top-button_menu"><img src={IconMenu}/></li>
            </Route>
            <Route exact path="/saved-movies">
                <li className="header__top-button"><a href="/movies">Фильмы</a></li>
                <li className="header__top-button header__top-button_left"><a href="/saved-movies"><b>Сохраненные фильмы</b></a></li>
                <li className="header__top-button "><a href="/profile" className="header__top-button_profile">Аккаунт</a></li>
                <li className="header__top-button header__top-button_menu"><img src={IconMenu}/></li>
            </Route>
        </Switch>
    )
}
export default Navigation;