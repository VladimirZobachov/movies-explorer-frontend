import React, {useContext, useEffect, useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({ loggedIn, movies }) {
    const [searchingMovies, setSearchingMovies] = useState([]);
    const [movie, setMovie] = useState('');
    const [shortMovies, setShortMovies] = useState(false);
    const currentUser = useContext(CurrentUserContext);

    const filterMovies = (movies, movie) =>{
        return movies.filter((item) =>
            item.nameRU.toLowerCase() == movie.toLowerCase() ||
            item.nameEN.toLowerCase() == movie.toLowerCase()
        );
    }

    const saveStatePage = (savedMovies, shortMovie, movie) =>{
        localStorage.setItem(`${currentUser.email}-movies`, JSON.stringify(savedMovies));
        localStorage.setItem(`${currentUser.email}-shortMovie`, shortMovie);
        localStorage.setItem(`${currentUser.email}-movie`, movie);
    }

    const handleMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const onSubmitForm = () => {
        if(shortMovies){
            const listOfShortMovies = movies.filter((item)=>item.duration < 40);
            const listOfMovies = filterMovies(listOfShortMovies, movie)
            setSearchingMovies(listOfMovies);
            saveStatePage(listOfMovies, shortMovies, movie);
        }else{
            const listOfMovies = filterMovies(movies, movie)
            setSearchingMovies(listOfMovies);
            saveStatePage(listOfMovies, shortMovies, movie);
        }
    }

    const handleShortMovie = ()=>{
        return shortMovies ? setShortMovies(false) : setShortMovies(true)
    }

    useEffect(()=>{
        if(localStorage.getItem(`${currentUser.email}-movies`)){
            setSearchingMovies(JSON.parse(localStorage.getItem(`${currentUser.email}-movies`)));
            setShortMovies(localStorage.getItem(`${currentUser.email}-shortMovie`));
            setMovie(localStorage.getItem(`${currentUser.email}-movie`));
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
      <MoviesCardList movies={searchingMovies} />
      <Footer />
    </>
    );
}
export default Movies;
