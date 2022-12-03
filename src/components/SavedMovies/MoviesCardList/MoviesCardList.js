import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, handleDelMovie, searchingMovies}) {
  let listOfMovies = [];
  searchingMovies.length !== 0 ? listOfMovies = searchingMovies : listOfMovies = movies;
  return (
    <section className="movies">
      <ul className="movies__card-list">
          {listOfMovies.map((item) => {
              return(
              <MoviesCard
                  key={item._id}
                  card={item}
                  handleDelMovie={handleDelMovie}
              />)
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
