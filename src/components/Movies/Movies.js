import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {Route, Switch} from "react-router-dom";
import Header from '../Header/Header';
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";

function Movies(props){
    return(
        <Switch>
            <Route exact path="/movies">
                <Header/>
                <SearchForm/>
                <Movies films={props.films} />
                <Footer/>
            </Route>
            <Route exact path="/saved-movies">
                <Header/>
                <SearchForm/>
                <SavedMovies/>
                <Footer/>
            </Route>
            <Route exact path="/profile">
                <Header/>
                <Profile/>
            </Route>
        </Switch>
    )
}
export default Movies;