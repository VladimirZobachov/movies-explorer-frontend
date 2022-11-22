import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const [endOfRange, setEndOfRange] = useState(6);
  const [isClose, setIsClose] = useState(false);
  const moreFilms = () => {
    if (endOfRange >= props.films.length) {
      setIsClose(true);
    } else {
      setEndOfRange(endOfRange + 3);
    }
  };

  const partOfFilms = props.films.slice(0, endOfRange);

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {partOfFilms.map((item) => (
          <MoviesCard
            key={item.id}
            card={item}
          />
        ))}
      </ul>
      <button
        type="button"
        className={`movies__card-list-more ${isClose ? 'movies__card-list-more_closed' : ''}`}
        onClick={moreFilms}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
