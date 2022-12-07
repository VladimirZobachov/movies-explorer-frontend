import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import IconMenu from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';

function Navigation({handleOpenPopup}) {

  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <ul className="header__navigation-movies">
            <li className="header__navigation-item header__navigation-item_logo">
              <Link to="/"><img src={logo} alt="лого" /></Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/movies" className="header__navigation-item-link">Фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/profile" className="header__navigation-button-profile">Аккаунт</Link>
            </li>
            <li className="header__navigation-item header__navigation-button-menu">
              <button className="header__navigation-button-menu" type="button" onClick={handleOpenPopup}>
                <img src={IconMenu} className="header__navigation-item-menu" alt="меню" />
              </button>
            </li>
          </ul>
        </header>
      </Route>
      <Route exact path="/movies">
        <header className="header">
          <ul className="header__navigation-movies">
            <li className="header__navigation-item header__navigation-item_logo">
              <Link to="/"><img src={logo} alt="лого" /></Link>
            </li>
            <li className="header__navigation-item">
              <b><Link to="/movies" className="header__navigation-item-link">Фильмы</Link></b>
            </li>
            <li className="header__navigation-item">
              <Link to="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/profile" className="header__navigation-button-profile">Аккаунт</Link>
            </li>
            <li className="header__navigation-item header__navigation-button-menu">
              <button className="header__navigation-button-menu" type="button" onClick={handleOpenPopup}>
                <img src={IconMenu} className="header__navigation-item-menu" alt="меню" />
              </button>
            </li>
          </ul>
        </header>
      </Route>
      <Route exact path="/saved-movies">
        <header className="header">
          <ul className="header__navigation-movies">
            <li className="header__navigation-item header__navigation-item_logo">
              <Link to="/"><img src={logo} alt="лого" /></Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/movies" className="header__navigation-item-link">Фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <b><Link to="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</Link></b>
            </li>
            <li className="header__navigation-item">
              <Link to="/profile" className="header__navigation-button-profile">Аккаунт</Link>
            </li>
            <li className="header__navigation-item header__navigation-button-menu">
              <button className="header__navigation-button-menu" type="button" onClick={handleOpenPopup}>
                <img src={IconMenu} className="header__navigation-item-menu" alt="меню" />
              </button>
            </li>
          </ul>
        </header>
      </Route>
      <Route exact path="/profile">
        <header className="header">
          <ul className="header__navigation-movies">
            <li className="header__navigation-item header__navigation-item_logo">
              <Link to="/"><img src={logo} alt="лого" /></Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/movies" className="header__navigation-item-link">Фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/saved-movies" className="header__navigation-item-link">Сохраненные фильмы</Link>
            </li>
            <li className="header__navigation-item">
              <Link to="/profile" className="header__navigation-button-profile">Аккаунт</Link>
            </li>
            <li className="header__navigation-item header__navigation-button-menu">
              <button className="header__navigation-button-menu" type="button" onClick={handleOpenPopup}>
                <img src={IconMenu} className="header__navigation-item-menu" alt="меню" />
              </button>
            </li>
          </ul>
        </header>
      </Route>
    </Switch>
  );
}
export default Navigation;
