import React, {useContext, useEffect, useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import {filterMovies, saveStatePage} from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ loggedIn, movies, savedMovies, handleCardSave, handleCardDel }) {
    const [searchingMovies, setSearchingMovies] = useState([]);
    const [movie, setMovie] = useState('');
    const [shortMovies, setShortMovies] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const page = 'moviesPage';

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const onSubmitForm = () => {
            const listOfMovies = filterMovies(movies, movie, shortMovies)
            setSearchingMovies(listOfMovies);
            saveStatePage(page, listOfMovies, shortMovies, movie, currentUser);
    }

    const handleShortMovie = ()=>{
        if (shortMovies){
            setShortMovies(false);
            localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
        }else{
            setShortMovies(true);
            localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
        }
    }

    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-${page}-movies`)){
            setSearchingMovies(JSON.parse(localStorage.getItem(`${currentUser.email}-${page}-movies`)));
            setShortMovies(localStorage.getItem(`${currentUser.email}-${page}-shortMovie`));
            setMovie(localStorage.getItem(`${currentUser.email}-${page}-movie`));
        }
    }, [currentUser])

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
