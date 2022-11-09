function Portfolio(){
    return (
        <section className="main__portfolio">
            <h3 className="main__portfolio-title">Портфолио</h3>
            <ul className="main__portfolio-list">
                <li className="main__portfolio-item"><a href="https://github.com/VladimirZobachov/how-to-learn">Статичный сайт</a></li>
                <li className="main__portfolio-item"><a href="https://vladimirzobachov.github.io/mesto/index.html">Адаптивный сайт</a></li>
                <li className="main__portfolio-item main__portfolio-item-end"><a href="https://github.com/VladimirZobachov/express-mesto-gha">Одностраничное приложение</a></li>
            </ul>
        </section>
    );
}
export default Portfolio;