import React, {useCallback, useContext, useEffect, useState} from 'react';
import Header from '../Header/Header';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import isEmail from "validator/es/lib/isEmail";

function Profile({ loggedIn, onLogout, onProfile, handleOpenPopup }) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const disabledButton = (!isValid || values.name === currentUser.name && values.email === currentUser.email);

  const handleValidation = (e) => {
    const input = e.target;
    const { value, name } = input;
    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity('Некорректый адрес почты.');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) =>{
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      }, [setValues, setErrors, setIsValid]
  );

  const onChange = (e)=>{
    const input = e.target;
    const {value, name} = input;
    if(name === 'name'){
      if(value === currentUser.name){
        input.setCustomValidity('Имя должно отличаться от прежнего')
      }else{
        setUserName(value)
      }
    }
    if(name === 'email'){
      setUserEmail(value)
    }
    handleValidation(e);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    onProfile(userName, userEmail)
  }

  useEffect(()=>{
    if(currentUser){
      resetForm(currentUser, {}, true)
    }
  }, [currentUser, resetForm])

  return (
    <>
      <Header loggedIn={loggedIn} handleOpenPopup={handleOpenPopup} />
      <form className="main" onSubmit={handleSubmit}>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <ul className="profile__list">
            <li className="profile__item profile__item_underline">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email || userEmail}
                  onChange={onChange}
                  required
              />
            </li>
            <li className="profile__item">
              <label htmlFor="name">Имя</label>
              <input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name || userName}
                  onChange={onChange}
                  required
              />
            </li>
            <span className="form__errors">{errors.email}</span>
            <span className="form__errors">{errors.name}</span>
          </ul>
        </section>
        <section className="profile__edit">
          <ul className="profile__list">
            <li className="profile__item-link">
              <button type="submit" disabled={disabledButton}>Редактировать</button>
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
