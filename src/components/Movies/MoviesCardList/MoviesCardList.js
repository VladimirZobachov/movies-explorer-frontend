import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}) {
  const [isClose, setIsClose] = useState(false);

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            card={item}
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
