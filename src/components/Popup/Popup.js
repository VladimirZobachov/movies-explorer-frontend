function Popup() {
  return (
    <div className="popup">
      <div className="popup_type_menu">
        <button type="button" className="popup__close-button" />
        <ul className="popup_type_menu-list">
          <li className="popup_type_menu-item"><a href="/">Главная</a></li>
          <li className="popup_type_menu-item"><a href="/movies">Фильмы</a></li>
          <li className="popup_type_menu-item"><a href="/saved-movies">Сохраненные фильмы</a></li>
          <li className="popup_type_menu-item">
            <button className="header__navigation-button-profile" type="button">Аккаунт</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Popup;
