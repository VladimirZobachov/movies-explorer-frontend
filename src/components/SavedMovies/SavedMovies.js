import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn, films }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <MoviesCardList films={films} />
      <Footer />
    </>
  );
}

export default SavedMovies;
