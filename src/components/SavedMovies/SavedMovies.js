import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props){
    return(
        <>
            <Header/>
            <MoviesCardList films={props.films} />
            <Footer/>
        </>
    );
}

export default SavedMovies;
