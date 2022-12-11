import React from 'react';

function Popup({isOpenPopup, handleClosePopup}) {
  return (
    <div className={`popup ${isOpenPopup ? 'popup__opened' : ''}`}>
      <div className="popup_type_menu">
        <button type="button" className="popup__close-button" onClick={handleClosePopup}/>
        <ul className="popup_type_menu-list">
          <li className="popup_type_menu-item"><a href="/">Главная</a></li>
          <li className="popup_type_menu-item"><a href="/movies">Фильмы</a></li>
          <li className="popup_type_menu-item"><a href="/saved-movies">Сохраненные фильмы</a></li>
          <li className="popup_type_menu-item">
            <a href="/profile" className="header__navigation-button-profile">Аккаунт</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Popup;
