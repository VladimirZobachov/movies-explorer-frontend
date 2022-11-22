import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies({ loggedIn, films }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList films={films} />
      <Footer />
    </>
  );
}
export default Movies;
