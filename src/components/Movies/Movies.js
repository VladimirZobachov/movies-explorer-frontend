import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from '../Header/Header';
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function Movies(props){

    return(
            <>
                <Header/>
                <SearchForm/>
                <MoviesCardList films={props.films} />
                <Footer/>
            </>
    )
}
export default Movies;
