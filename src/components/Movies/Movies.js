import React, {useContext, useEffect, useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import {filterMovies, saveStatePage} from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ loggedIn, movies, savedMovies, handleCardSave, handleCardDel, setIsInfoTooltip, setIsLoad}) {
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

    const onSubmitForm = async (e) => {
        try{
            setIsLoad(true);
            e.preventDefault();
            const listOfMovies = await filterMovies(movies, movie, shortMovies);
            if (listOfMovies.length === 0){
                setIsLoad(false);
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: 'По вашему запросу к сожалению фильмов не найдено(',
                })
            }
            await setSearchingMovies(listOfMovies);
            saveStatePage(page, listOfMovies, shortMovies, movie, currentUser);
        }catch (err){
            setIsInfoTooltip({
                isOpen: true,
                statusOk: false,
                textStatus: err.message,
            })
        }finally {
            setIsLoad(false);
        }
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
