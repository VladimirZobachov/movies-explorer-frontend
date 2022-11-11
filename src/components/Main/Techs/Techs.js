function Techs(){
    return (
        <section className="main__techs" id="techs">
            <h2 className="main__section-title-techs">Технологии</h2>
            <div className="main__techs-content">
                <h3 className="main__techs-content-title">7 технологий</h3>
                <p className="main__techs-content-subtitle">На курсе веб-разработки мы освоили технологии, которые
                    применили в дипломном проекте</p>
                <ul className="main__techs-list">
                    <li className="main__techs-item main__techs-item_start">
                        HTML
                    </li>
                    <li className="main__techs-item">
                        CSS
                    </li>
                    <li className="main__techs-item">
                        JS
                    </li>
                    <li className="main__techs-item">
                        React
                    </li>
                    <li className="main__techs-item">
                        Git
                    </li>
                    <li className="main__techs-item">
                        Express.js
                    </li>
                    <li className="main__techs-item">
                        mongoDB
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Techs;