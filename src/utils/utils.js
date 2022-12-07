import { SHORTMOVIES_DURATION } from './constants';
export const filterMovies = (movies, movie, shortMovie) =>{
  if(shortMovie){
    const listOfShortMovies = movies.filter((item)=>item.duration < SHORTMOVIES_DURATION);
    return listOfShortMovies.filter((item) =>
        item.nameRU.toLowerCase().trim().includes(movie.toLowerCase().trim()) ||
        item.nameEN.toLowerCase().trim().includes(movie.toLowerCase().trim())
    );
  }else{
    return movies.filter((item) =>
        item.nameRU.toLowerCase().trim().includes(movie.toLowerCase().trim()) ||
        item.nameEN.toLowerCase().trim().includes(movie.toLowerCase().trim())
    );
  }
}
export const saveStatePage = (page, savedMovies, shortMovie, movie) =>{
  localStorage.setItem(`${page}-movies`, JSON.stringify(savedMovies));
  localStorage.setItem(`${page}-shortMovie`, shortMovie);
  localStorage.setItem(`${page}-movie`, movie);
}
