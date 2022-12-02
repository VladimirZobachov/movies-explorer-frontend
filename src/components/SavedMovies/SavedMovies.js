import React, {useContext, useState, useEffect} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from "./SearchForm/SearchForm";
import {filterMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedMovies({ loggedIn, movies, handleCardDel }) {
    const page = 'savedPage';
    const currentUser = useContext(CurrentUserContext);
    const [shortMovies, setShortMovies] = useState(localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true' ? true : false);
    const [movie, setMovie] = useState('');
    const [listMovies, setListMovies] = useState(movies);
    const [searchingMovies, setSearchingMovies] = useState(listMovies);

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const handleDelMovie = (movie) =>{
        handleCardDel(movie);
        const newListMovies = listMovies.filter(item => item.movieId !== movie.movieId);
        setListMovies(newListMovies);
    }

    const handleSaveShortMovie = (value)=>{
        setShortMovies(value);
        localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
    }

    const handleShortMovie = ()=>{
        setShortMovies(!shortMovies);
        localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovies);
    }

    const onSubmitForm = (e)=>{
        e.preventDefault();
        setSearchingMovies(filterMovies(movies, movie, shortMovies));
    };

    useEffect(()=>{
        setListMovies(searchingMovies);
    }, [searchingMovies]);

    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-${page}-movie`)){
            setMovie(localStorage.getItem(`${currentUser.email}-${page}-movie`));
            (localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true') ? setShortMovies(true) : setShortMovies(false);
        }
    }, [currentUser])

    useEffect(()=>{
        setListMovies(movies);
    }, [currentUser]);

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
          movies={listMovies}
          handleDelMovie={handleDelMovie}
      />
      <Footer />
    </>
    );
}

export default SavedMovies;
