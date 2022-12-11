import React from 'react';
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function NavTab() {
  return (
    <header className="header">
      <ul className="header__navigation">
        <li className="header__navigation-item"><Link to="/"><img src={logo} alt="лого" /></Link></li>
        <li className="header__navigation-item header__navigation-item_button-register">
          <Link to="/signup">Регистрация</Link>
        </li>
        <li className="header__navigation-item ">
          <Link to="/signin" className="header__navigation-button-signin">Войти</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavTab;
