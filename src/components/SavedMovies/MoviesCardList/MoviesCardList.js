import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, handleCardDel}) {

  return (
    <section className="movies">
      <ul className="movies__card-list">
          {movies.map((item) => {
              return(
              <MoviesCard
                  key={item._id}
                  card={item}
                  handleCardDel={handleCardDel}
              />)
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
