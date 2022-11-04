import mouth from "../images/mouth.svg";
function Register(){
    return(
        <main className="content">
            <form className="popup__form popup__form-profile" name="popup-form">
                <ul className="content__form-information-list">
                    <li className="header__top-button header__top-button_logo">
                        <a href="/" className="header__logo">
                            <img src={mouth} className="header__logo-mouth" alt="Улыбка"/>
                        </a>
                    </li>
                    <li className="content__form-information-item">
                        <h2 className="content__form-information-title">Добро пожаловать!</h2>
                    </li>
                    <li className="content__form-information-item">
                        <label htmlFor="name" className="content__form-information-label">Имя</label>
                        <input type="text" className="content__form-information-input" name="name" id="name" required minLength="2" maxLength="40"/>
                    </li>
                    <li className="content__form-information-item">
                        <label htmlFor="email" className="content__form-information-label">Email</label>
                        <input type="email" className="content__form-information-input" name="email" id="email" required minLength="2" maxLength="200"/>
                    </li>
                    <li className="content__form-information-item">
                        <label htmlFor="password" className="content__form-information-label">Пароль</label>
                        <input type="password" className="content__form-information-input" name="password" id="password" required minLength="2" maxLength="200"/>
                        <span className="content__form-information-error-message"></span>
                    </li>
                    <li className="content__form-information-item">
                        <button aria-label="saveForm" type="submit" className="content__form-information-button">Зарегистрироваться</button>
                    </li>
                    <li className="content__form-information-item">
                        <span className="content__form-information-footer">Уже зарегистрированы?
                        <a href="/signin" className="content__form-information-footer-link">Войти</a>
                        </span>
                    </li>
                </ul>
            </form>
        </main>
    );
}
export default Register;
