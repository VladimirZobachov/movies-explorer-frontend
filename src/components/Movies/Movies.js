import React, {useContext, useEffect, useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import {filterMovies, saveStatePage} from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ loggedIn, movies, savedMovies, handleCardSave, handleCardDel }) {
    const page = 'moviesPage';
    const currentUser = useContext(CurrentUserContext);
    const [searchingMovies, setSearchingMovies] = useState([]);
    const [movie, setMovie] = useState('');
    const [shortMovies, setShortMovies] = useState(localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true' ? true : false);

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    }

    const handleSaveShortMovie = (value)=>{
        setShortMovies(value);
        localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const listOfMovies = filterMovies(movies, movie, shortMovies)
        setSearchingMovies(listOfMovies);
        saveStatePage(page, listOfMovies, shortMovies, movie, currentUser);
    }

    const handleShortMovie = ()=>{
        setShortMovies(!shortMovies);
        localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
    }

    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-${page}-movies`)){
            setSearchingMovies(JSON.parse(localStorage.getItem(`${currentUser.email}-${page}-movies`)));
            setMovie(localStorage.getItem(`${currentUser.email}-${page}-movie`));
            (localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true') ? setShortMovies(true) : setShortMovies(false);
        }
    }, [currentUser])

    useEffect(()=>{
        handleSaveShortMovie(shortMovies);
    }, [shortMovies])

    return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
          movie = {movie}
          handleMovie = {handleMovie}
          handleShortMovie = {handleShortMovie}
          shortMovies = {shortMovies}
          onSubmitForm = {onSubmitForm}
      />
      <MoviesCardList
          movies={searchingMovies}
          savedMovies={savedMovies}
          handleCardSave={handleCardSave}
          handleCardDel={handleCardDel}
      />
      <Footer />
    </>
    );
}
export default Movies;
