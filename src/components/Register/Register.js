function Register(){
    return(
        <main className="main">
            <form className="form">
                <section className="form__body">
                    <ul className="form__body-list">
                        <li className="form__body-item">
                            <label htmlFor="name">Имя</label>
                            <input type="text" name="name" id="name"/>
                        </li>
                        <li className="form__body-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </li>
                        <li className="form__body-item">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </li>
                    </ul>
                </section>
                <section className="form__footer">
                    <ul className="form__footer-list">
                        <li className="form__footer-item">
                            <button type="button" className="form__footer-button-register">Зарегистрироваться</button>
                        </li>
                        <li className="form__footer-item">
                            <span className="form__footer-question">Вы уже зарегистрированы?</span>
                            <a href="/signin" className="form__footer-link">Войти</a>
                        </li>
                    </ul>
                </section>
            </form>
        </main>
    );
}
export default Register;
