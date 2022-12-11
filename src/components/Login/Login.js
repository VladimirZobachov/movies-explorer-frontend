import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import isEmail from "validator/es/lib/isEmail";

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: '',
    },
  );
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
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

  const handleChange = (e) => {
    const input = e.target;
    const { name, value } = input;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    handleValidation(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData.email, loginData.password);
  };


  return (
    <>
      <header className="form__header">
        <ul className="form__header-list">
          <li className="form__header-item"><a href="/"><img src={logo} alt="лого" /></a></li>
          <li className="form__header-item"><h1 className="form__header-title">Рады видеть!</h1></li>
        </ul>
      </header>
      <main className="main">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <section className="form__body">
            <ul className="form__body-list">
              <li className="form__body-item">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    autoComplete="email"
                    value={values.email || ''}
                    required
                />
                <span className="form__errors">{errors.email}</span>
              </li>
              <li className="form__body-item">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    autoComplete="password"
                    minLength="3"
                    value={values.password || ''}
                    required
                />
                <span className="form__errors">{errors.password}</span>
              </li>
            </ul>
          </section>
          <section className="form__footer">
            <ul className="form__footer-list">
              <li className="form__footer-item">
                <button type="submit" className={`form__footer-button-register ${isValid ? 'form__footer-button-register_active' : 
                    'form__footer-button-register_disabled'}`} disabled={!isValid}>Войти</button>
              </li>
              <li className="form__footer-item">
                <span className="form__footer-question">Ещё не зарегистрированы?</span>
                <a href="/signup" className="form__footer-link">Регистрация</a>
              </li>
            </ul>
          </section>
        </form>
      </main>
    </>
  );
}
export default Login;
