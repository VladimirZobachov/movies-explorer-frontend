function Portfolio(){
    return (
        <section className="main__portfolio">
            <h3 className="main__portfolio-title">Портфолио</h3>
            <ul className="main__portfolio-list">
                <li className="main__portfolio-item"><a href="https://github.com/VladimirZobachov/how-to-learn" target="_blank"  rel="noreferrer">Статичный сайт</a></li>
                <li className="main__portfolio-item"><a href="https://vladimirzobachov.github.io/mesto/index.html" target="_blank"  rel="noreferrer">Адаптивный сайт</a></li>
                <li className="main__portfolio-item main__portfolio-item-end"><a href="https://github.com/VladimirZobachov/express-mesto-gha" target="_blank"  rel="noreferrer">Одностраничное приложение</a></li>
            </ul>
        </section>
    );
}
export default Portfolio;