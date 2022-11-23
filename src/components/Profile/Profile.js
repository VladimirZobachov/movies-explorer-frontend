import React from 'react';
import Header from '../Header/Header';

function Profile({ loggedIn, onLogout }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, Владимир!</h1>
          <ul className="profile__list">
            <li className="profile__item profile__item_underline">
              <span>Email</span>
              <span>zobachov@gmail.com</span>
            </li>
            <li className="profile__item">
              <span>Имя</span>
              <span>Владимир</span>
            </li>
          </ul>
        </section>
        <section className="profile__edit">
          <ul className="profile__list">
            <li className="profile__item-link">
              <button type="button">Редактировать</button>
            </li>
            <li className="profile__item-link">
              <button type="button" className="profile__item-link_important" onClick={onLogout}>Выйти из аккаунта</button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
export default Profile;
