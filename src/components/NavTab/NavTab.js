import React from 'react';
import logo from '../../images/logo.svg';

function NavTab() {
  return (
    <header className="header">
      <ul className="header__navigation">
        <li className="header__navigation-item"><a href="/"><img src={logo} alt="лого" /></a></li>
        <li className="header__navigation-item header__navigation-item_button-register">
          <a href="/signup">Регистрация</a>
        </li>
        <li className="header__navigation-item ">
          <a href="/signin" className="header__navigation-button-signin">Войти</a>
        </li>
      </ul>
    </header>
  );
}

export default NavTab;
