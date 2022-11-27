import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, handleCardSave}) {
  const [isClose, setIsClose] = useState(true);

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            card={item}
            handleCardSave={handleCardSave}
          />
        ))}
      </ul>
      <button
        type="button"
        className={`movies__card-list-more ${isClose ? 'movies__card-list-more_closed' : ''}`}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
