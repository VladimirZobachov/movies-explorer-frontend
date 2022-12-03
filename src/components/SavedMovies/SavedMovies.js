import React, {useContext, useState, useEffect} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from "./SearchForm/SearchForm";
import {filterMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedMovies({ loggedIn, movies, handleCardDel, setIsInfoTooltip }) {
    const page = 'savedPage';
    const currentUser = useContext(CurrentUserContext);
    const [shortMovies, setShortMovies] = useState(localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true' ? true : false);
    const [movie, setMovie] = useState('');
    const [listOfMovies, setListOfMovies] = useState(movies);
    const [searchingMovies, setSearchingMovies] = useState(listOfMovies);

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const handleDelMovie = async(movie) =>{
        try{
            await handleCardDel(movie);
            const newListMovies = await movies.filter(item => item.movieId !== movie.movieId);
            await setListOfMovies(newListMovies);
        }catch (err){
            setIsInfoTooltip({
                isOpen: true,
                statusOk: false,
                textStatus: err.message,
            })
        }
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
        setListOfMovies(searchingMovies);
    }, [searchingMovies]);

    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-${page}-movie`)){
            setMovie(localStorage.getItem(`${currentUser.email}-${page}-movie`));
            (localStorage.getItem(`${currentUser.email}-${page}-shortMovie`) === 'true') ? setShortMovies(true) : setShortMovies(false);
        }
    }, [currentUser])

    useEffect(()=>{
        setListOfMovies(movies);
    }, [currentUser]);


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
          movies={listOfMovies}
          handleDelMovie={handleDelMovie}
      />
      <Footer />
    </>
    );
}

export default SavedMovies;
