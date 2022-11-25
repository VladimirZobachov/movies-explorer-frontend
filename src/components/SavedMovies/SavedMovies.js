import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn, movies }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <MoviesCardList movies={movies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
