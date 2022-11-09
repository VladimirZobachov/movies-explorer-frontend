import avatar from '../../images/avatar.jpg';
function AboutMe(){
    return (
        <section className="main__about-me" id="about-me">
            <h2 className="main__section-title">Студент</h2>
            <div className="main__about-me-content">
                <img src={avatar} className="main__about-me-avatar" alt="аватар"/>
                    <div className="main__about-me-info">
                        <h3 className="main__about-me-info-title">Владимир</h3>
                        <p className="main__about-me-info-subtitle">Фронтенд разработчик, 36 лет</p>
                        <p className="main__about-me-info-description">
                            Я родился и живу на Урале в г. Екатеринбург, по образованию я учитель Физики и Информатики
                            закончил Уральский Педагогический Университет в 2007 году. Женат есть двое детей мальчик и
                            девочка. Люблю путешествовать был в 7(семи) странах.
                        </p>
                        <ul className="main__about-me-info-social-list">
                            <li className="main__about-me-info-social-item">Facebook</li>
                            <li className="main__about-me-info-social-item">Github</li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}
export default AboutMe;