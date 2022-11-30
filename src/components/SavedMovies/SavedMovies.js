import React, {useContext, useState, useEffect} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from "./SearchForm/SearchForm";
import {filterMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedMovies({ loggedIn, movies, handleCardDel }) {
    const [shortMovies, setShortMovies] = useState(false);
    const [movie, setMovie] = useState('');
    const [listMovies, setListMovies] = useState(movies);
    const [searchingMovies, setSearchingMovies] = useState(listMovies);
    const currentUser = useContext(CurrentUserContext);

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const handleShortMovies = (value)=>{
        setShortMovies(value);
    }

    const onSubmitForm = (e)=>{
        e.preventDefault();
        setSearchingMovies(filterMovies(movies, movie, shortMovies));
    };

    useEffect(()=>{
        console.log('Effect---1');
        setListMovies(movies);
    }, [currentUser]);

    useEffect(()=>{
        console.log('Effect---2');
        setListMovies(searchingMovies);
    }, [searchingMovies]);


    return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
          onSubmitForm={onSubmitForm}
          handleMovie={handleMovie}
          handleShortVovies ={handleShortMovies}
          movie={movie}
      />
      <MoviesCardList
          movies={listMovies}
          handleCardDel={handleCardDel}
      />
      <Footer />
    </>
    );
}

export default SavedMovies;
