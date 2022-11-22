import React from 'react';

function AboutProject() {
  return (
    <section className="main__about-project" id="about-project">
      <h2 className="main__section-title">О проекте</h2>
      <ul className="main__about-project-list">
        <li className="main__about-project-item">
          <h3 className="main__about-project-item-title">Дипломный проект включал 5 этапов</h3>
          <p className="main__about-project-item-description">
            Составление плана, работа над бэкэндом, верстка,
            добавление функциональности и финальные доработки
          </p>
        </li>
        <li className="main__about-project-item">
          <h3 className="main__about-project-item-title">На выполнение диплома ушло 5 недель</h3>
          <p className="main__about-project-item-description">
            У каждого этапа был мягкий и жесткий дедлайн,
            которые нужно было соблюсти, чтобы защититься.
          </p>
        </li>
      </ul>
      <ul className="main__about-project-timeline">
        <li className="main__about-project-timeline-item">
          <h3 className="main__about-project-timeline-item-title main__about-project-timeline-item-title_black">
            1
            неделя
          </h3>
          <p className="main__about-project-timeline-item-description">Back-end</p>
        </li>
        <li className="main__about-project-timeline-item main__about-project-timeline_eighty-percent">
          <h3 className="main__about-project-timeline-item-title main__about-project-timeline-item-title_gray">
            4
            недели
          </h3>
          <p className="main__about-project-timeline-item-description">Front-end</p>
        </li>
      </ul>
    </section>
  );
}
export default AboutProject;
