import React, {useState} from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies({ loggedIn, movies }) {
    const [searchingMovies, setSearchingMovies] = useState([]);
    const onSearch = (movie, shortMovie) => {
        if(shortMovie){
            const shortMovies = movies.filter((item)=>item.duration < 40);
            const filteredMovies = shortMovies.filter((item) =>
                item.nameRU.toLowerCase() == movie.toLowerCase() ||
                item.nameEN.toLowerCase() == movie.toLowerCase()
            );
            setSearchingMovies(filteredMovies);
            localStorage.setItem('lastSearch', {
                "movies": filteredMovies,
                "shortMovie": shortMovie,
                "movie": movie
            });
        }else{
            const filteredMovies = movies.filter((item) =>
                item.nameRU.toLowerCase() == movie.toLowerCase() ||
                item.nameEN.toLowerCase() == movie.toLowerCase()
            );
            setSearchingMovies(filteredMovies);
            localStorage.setItem('lastSearch', {
                "movies": filteredMovies,
                "shortMovie": shortMovie,
                "movie": movie
            });
        }
    }
    return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm onSearch = {onSearch}/>
      <MoviesCardList movies={searchingMovies} />
      <Footer />
    </>
    );
}
export default Movies;
