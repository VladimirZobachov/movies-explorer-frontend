import avatar from '../../images/avatar.jpg';
function AboutMe(){
    return (
        <section className="content__student" id="student">
            <h2 className="content__section-title">Студент</h2>
            <div className="content__student-content">
                <img src={avatar} className="content__student-avatar" alt="Аватар"/>
                    <div className="content__student-description">
                        <h3 className="content__student-title">Владимир</h3>
                        <p className="content__student-subtitle">Фронтенд разработчик, 36 лет</p>
                        <p className="content__student-about">
                            Я родился и живу на Урале в г. Екатеринбург, по образованию я учитель Физики и Информатики
                            закончил Уральский Педагогический Университет в 2007 году. Женат есть двое детей мальчик и
                            девочка. Люблю путешествовать был в 7(семи) странах.
                        </p>
                        <ul className="content__student-social-list">
                            <li className="content__student-social-element">Facebook</li>
                            <li className="content__student-social-element">Github</li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}
export default AboutMe;