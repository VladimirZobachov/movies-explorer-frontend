import React, {useContext, useState, useEffect} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from "./SearchForm/SearchForm";
import {filterMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedMovies({ loggedIn, movies, handleCardDel, setIsInfoTooltip, handleOpenPopup }) {
    const page = 'savedPage';
    const currentUser = useContext(CurrentUserContext);
    const [shortMovies, setShortMovies] = useState(localStorage.getItem(`${page}-shortMovie`) === 'true' ? true : false);
    const [movie, setMovie] = useState('');
    const [searchingMovies, setSearchingMovies] = useState(movies);

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const handleShortMovie = ()=>{
        setShortMovies(!shortMovies);
        localStorage.setItem(`${page}-shortMovie`, !shortMovies);
    }

    const onSubmitForm = async(e)=>{
        try{
            e.preventDefault();
            await setSearchingMovies(filterMovies(movies, movie, shortMovies));
            if(filterMovies(movies, movie, shortMovies).length === 0){
               await setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: 'по запросу ничего не найдено измените его пжлта)',
                })
            }
        }catch (err){
            setIsInfoTooltip({
                isOpen: true,
                statusOk: false,
                textStatus: err.message,
            })
        }
    };

    useEffect(()=>{
        if(localStorage.getItem(`${page}-shortMovie`) === 'true'){
            setShortMovies(true);
        }else{
            setShortMovies(false);
        }
    }, [currentUser]);

    return (
    <>
      <Header
          loggedIn={loggedIn}
          handleOpenPopup={handleOpenPopup}
      />
      <SearchForm
          movie = {movie}
          handleMovie = {handleMovie}
          handleShortMovie = {handleShortMovie}
          shortMovies = {shortMovies}
          onSubmitForm = {onSubmitForm}
      />
      <MoviesCardList
          movies={movies}
          searchingMovies={searchingMovies}
          handleDelMovie={handleCardDel}
      />
      <Footer />
    </>
    );
}

export default SavedMovies;
