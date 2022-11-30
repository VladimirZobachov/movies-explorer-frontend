export const filterMovies = (movies, movie, shortMovie) =>{
  if(shortMovie){
    const listOfShortMovies = movies.filter((item)=>item.duration < 40);
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
export const saveStatePage = (page, savedMovies, shortMovie, movie, currentUser) =>{
  localStorage.setItem(`${currentUser.email}-${page}-movies`, JSON.stringify(savedMovies));
  localStorage.setItem(`${currentUser.email}-${page}-shortMovie`, shortMovie);
  localStorage.setItem(`${currentUser.email}-${page}-movie`, movie);
}
