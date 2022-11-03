function AboutProject(){
    return (
        <section className="content__about" id="project">
            <h2 className="content__section-title">О проекте</h2>
            <ul className="content__about-topics">
                <li className="content__about-topic">
                    <h3 className="content__about-topic-title">Дипломный проект включал 5 этапов</h3>
                    <p className="content__section-description">Составление плана, работа над бэкэндом, верстка,
                        добавление функциональности и финальные доработки</p>
                </li>
                <li className="content__about-topic">
                    <h3 className="content__about-topic-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="content__section-description">У каждого этапа был мягкий и жесткий дедлайн, которые
                        нужно было соблюсти, чтобы защититься.</p>
                </li>
            </ul>
            <div className="content__section-footer">
                <ul className="content__timeline">
                    <li className="content__timeline-point content__timeline-point_20">
                        <h3 className="content__timeline-point-title content__timeline-point-title_black">1 неделя</h3>
                        <p className="content__timeline-point-description">Back-end</p>
                    </li>
                    <li className="content__timeline-point content__timeline-point_80">
                        <h3 className="content__timeline-point-title content__timeline-point-title_gray">4 недели</h3>
                        <p className="content__timeline-point-description">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default AboutProject;