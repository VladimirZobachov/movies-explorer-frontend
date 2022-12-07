import React, {useEffect, useState} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import {SHOWMOVIES_LIST, SHOWMOVIES_MORE} from '../../../utils/constants';

function MoviesCardList({movies, handleCardSave, handleCardDel, savedMovies}) {
    const [isCloseButtonMore, setIsCloseButtonMore] = useState(true);
    const [listOfMovies, setListOfMovies] = useState([]);
    const checkSavedMovie = (savedMoviesList, movie)=>{
        return savedMoviesList.find((item) => item.movieId == movie.id || movie.movieId);
    }
    const handleClickMoreMovies = () =>{
        setListOfMovies(movies.slice(0, listOfMovies.length + SHOWMOVIES_MORE));
    }
    useEffect(()=>{
        if(movies.length > listOfMovies.length){
            setIsCloseButtonMore(false);
        }else{
            setIsCloseButtonMore(true);
        }
    },[listOfMovies])

    useEffect(()=>{
        setListOfMovies(movies.slice(0, SHOWMOVIES_LIST));
    }, [movies])

    return (
    <section className="movies">
      <ul className="movies__card-list">
        {listOfMovies.map((item) => (
          <MoviesCard
            key={item.id}
            card={item}
            isSaved={checkSavedMovie(savedMovies, item)}
            savedMovies={savedMovies}
            handleCardSave={handleCardSave}
            handleCardDel={handleCardDel}
          />
        ))}
      </ul>
            <button onClick={handleClickMoreMovies}
             type="button"
             className={`movies__card-list-more ${isCloseButtonMore ? 'movies__card-list-more_closed' : ''}`}
            >
            Ещё
            </button>
    </section>
    );
}

export default MoviesCardList;
