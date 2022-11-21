import {Route, Switch} from "react-router-dom";
import IconMenu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";

function Navigation(){
    return (
        <Switch>
            <Route exact path="/">
            <header className="header">
                <ul className="header__navigation-movies">
                    <li className="header__navigation-item header__navigation-item_logo">
                        <a href="/"><img src={logo} alt="лого"/></a>
                    </li>
                    <li className="header__navigation-item">
                        <b><a href="/movies" className="header__navigation-item-link">Фильмы</a></b>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/profile" className="header__navigation-button-profile">Аккаунт</a>
                    </li>
                    <li className="header__navigation-item header__navigation-button-menu">
                        <button className="header__navigation-button-menu" type="button">
                            <img src={IconMenu} className="header__navigation-item-menu" alt="меню"/>
                        </button>
                    </li>
                </ul>
            </header>
            </Route>
            <Route exact path="/movies">
                <header className="header">
                <ul className="header__navigation-movies">
                    <li className="header__navigation-item header__navigation-item_logo">
                        <a href="/"><img src={logo} alt="лого"/></a>
                    </li>
                    <li className="header__navigation-item">
                        <b><a href="/movies" className="header__navigation-item-link">Фильмы</a></b>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/profile" className="header__navigation-button-profile">Аккаунт</a>
                    </li>
                    <li className="header__navigation-item header__navigation-button-menu">
                        <button className="header__navigation-button-menu" type="button">
                            <img src={IconMenu} className="header__navigation-item-menu" alt="меню"/>
                        </button>
                    </li>
                </ul>
                </header>
            </Route>
            <Route exact path="/saved-movies">
                <header className="header">
                <ul className="header__navigation-movies">
                    <li className="header__navigation-item header__navigation-item_logo">
                        <a href="/"><img src={logo} alt="лого"/></a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/movies" className="header__navigation-item-link">Фильмы</a>
                    </li>
                    <li className="header__navigation-item">
                        <b><a href="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</a></b>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/profile" className="header__navigation-button-profile">Аккаунт</a>
                    </li>
                    <li className="header__navigation-item header__navigation-button-menu">
                        <button className="header__navigation-button-menu" type="button">
                            <img src={IconMenu} className="header__navigation-item-menu" alt="меню"/>
                        </button>
                    </li>
                </ul>
                </header>
            </Route>
            <Route exact path="/profile">
                <header className="header">
                    <ul className="header__navigation-movies">
                        <li className="header__navigation-item header__navigation-item_logo">
                            <a href="/"><img src={logo} alt="лого"/></a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="/movies" className="header__navigation-item-link">Фильмы</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="/profile" className="header__navigation-button-profile">Аккаунт</a>
                        </li>
                        <li className="header__navigation-item header__navigation-button-menu">
                            <button className="header__navigation-button-menu" type="button">
                                <img src={IconMenu} className="header__navigation-item-menu" alt="меню"/>
                            </button>
                        </li>
                    </ul>
                </header>
            </Route>
            <Route exact path="/signin">
                <header className="form__header">
                    <ul className="form__header-list">
                        <li className="form__header-item"><a href="/"><img src={logo} alt="лого"/></a></li>
                        <li className="form__header-item"><h1 className="form__header-title">Рады видеть!</h1></li>
                    </ul>
                </header>
            </Route>
            <Route exact path="/signup">
                <header className="form__header">
                    <ul className="form__header-list">
                        <li className="form__header-item"><a href="/"><img src={logo} alt="лого"/></a></li>
                        <li className="form__header-item"><h1 className="form__header-title">Добро пожаловать!</h1></li>
                    </ul>
                </header>
            </Route>
        </Switch>
    )
}
export default Navigation;