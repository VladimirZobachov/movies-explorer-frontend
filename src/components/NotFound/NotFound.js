import React from 'react';

function NotFound({goBack}) {
  return (
    <main className="main">
      <h1 className="main__title-404">404</h1>
      <p className="main__subtitle-404">Страница не найдена</p>
      <a href="#" className="main__back-link-404" onClick={goBack}>Назад</a>
    </main>
  );
}
export default NotFound;
