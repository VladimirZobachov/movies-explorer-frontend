import React, { useState } from 'react';
import logo from '../../images/logo.svg';

function Register({onRegister}) {
  const [loginData, setLoginData] = useState(
      {
        email: '',
        password: '',
      },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password || !loginData.name) {
      return;
    }
    onRegister(loginData.email, loginData.password, loginData.name);
  };
  return (
    <>
      <header className="form__header">
        <ul className="form__header-list">
          <li className="form__header-item"><a href="/"><img src={logo} alt="лого" /></a></li>
          <li className="form__header-item"><h1 className="form__header-title">Добро пожаловать!</h1></li>
        </ul>
      </header>
      <main className="main">
        <form className="form" onSubmit={handleSubmit}>
          <section className="form__body">
            <ul className="form__body-list">
              <li className="form__body-item">
                <label htmlFor="name">Имя</label>
                <input type="text" name="name" id="name" onChange={handleChange} autoComplete="name" />
              </li>
              <li className="form__body-item">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} autoComplete="email" />
              </li>
              <li className="form__body-item">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} autoComplete="password" />
              </li>
            </ul>
          </section>
          <section className="form__footer">
            <ul className="form__footer-list">
              <li className="form__footer-item">
                <button type="submit" className="form__footer-button-register">Зарегистрироваться</button>
              </li>
              <li className="form__footer-item">
                <span className="form__footer-question">Вы уже зарегистрированы?</span>
                <a href="/signin" className="form__footer-link">Войти</a>
              </li>
            </ul>
          </section>
        </form>
      </main>
    </>
  );
}
export default Register;
