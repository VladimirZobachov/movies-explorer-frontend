import React, {useContext, useState} from 'react';
import Header from '../Header/Header';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({ loggedIn, onLogout, onProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);

  const onChange = (e)=>{
    const {value, name} = e.target;
    if(name === 'name'){
      setUserName(value)
    }
    if(name === 'email'){
      setUserEmail(value)
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    onProfile(userName, userEmail)
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <form className="main" onSubmit={handleSubmit}>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <ul className="profile__list">
            <li className="profile__item profile__item_underline">
              <lable>Email</lable>
              <input type="email" name="email" id="email" value={userEmail} onChange={onChange} required/>
            </li>
            <li className="profile__item">
              <label>Имя</label>
              <input type="name" name="name" id="name" value={userName} onChange={onChange} required/>
            </li>
          </ul>
        </section>
        <section className="profile__edit">
          <ul className="profile__list">
            <li className="profile__item-link">
              <button type="submit">Редактировать</button>
            </li>
            <li className="profile__item-link">
              <button type="button" className="profile__item-link_important" onClick={onLogout}>Выйти из аккаунта</button>
            </li>
          </ul>
        </section>
      </form>
    </>
  );
}
export default Profile;
