import React, {useContext, useEffect, useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ loggedIn, movies }) {
    const [searchingMovies, setSearchingMovies] = useState([]);
    const [handleMovie, setHandleMovie] = useState('');
    const [handleShortMovies, setHandleShortMovie] = useState('');
    const currentUser = useContext(CurrentUserContext);
    const filterMovies = (movies, movie) =>{
        return movies.filter((item) =>
            item.nameRU.toLowerCase() == movie.toLowerCase() ||
            item.nameEN.toLowerCase() == movie.toLowerCase()
        );
    }
    const saveMovies = (savedMovies, shortMovie, movie) =>{
        localStorage.setItem(`${currentUser.email}-movies`, JSON.stringify(savedMovies));
        localStorage.setItem(`${currentUser.email}-shortMovie`, shortMovie);
        localStorage.setItem(`${currentUser.email}-movie`, movie);
    }
    const onSearch = (movie, shortMovie) => {
        if(shortMovie){
            const shortMovies = movies.filter((item)=>item.duration < 40);
            setSearchingMovies(filterMovies(shortMovies, movie));
            saveMovies(filterMovies(shortMovies, movie), shortMovie, movie);
        }else{
            setSearchingMovies(filterMovies(movies, movie));
            saveMovies(filterMovies(movies, movie), shortMovie, movie);
        }
    }
    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-movies`)){
            setSearchingMovies(JSON.parse(localStorage.getItem(`${currentUser.email}-movies`)));
            setHandleShortMovie(localStorage.getItem(`${currentUser.email}-shortMovie`));
            setHandleMovie(localStorage.getItem(`${currentUser.email}-movie`));
        }
    }, [currentUser])

    return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
          handleMovie = {handleMovie}
          handleShortMovies = {handleShortMovies}
          onSearch = {onSearch}
      />
      <MoviesCardList movies={searchingMovies} />
      <Footer />
    </>
    );
}
export default Movies;
