function Login(){
    return(
    <main className="main">
        <form className="form">
            <section className="form__body">
                <ul className="form__body-list">
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
                        <button type="button" className="form__footer-button-register">Войти</button>
                    </li>
                    <li className="form__footer-item">
                        <span className="form__footer-question">Ещё не зарегистрированы?</span>
                        <a href="/signup" className="form__footer-link">Регистрация</a>
                    </li>
                </ul>
            </section>
        </form>
    </main>
    );
}
export default Login;