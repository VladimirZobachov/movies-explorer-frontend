import Header from './Header';
import Main from "./Main/Main";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Footer from "./Footer";
import {Route, Switch} from "react-router-dom";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SearchForm from "./Movies/SearchForm";

function App(){
    return (
        <CurrentUserContext.Provider value="">
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Main/>
                    <Footer/>
                </Route>
                <Route exact path="/movies">
                    <Header/>
                    <SearchForm/>
                    <Movies/>
                    <Footer/>
                </Route>
                <Route exact path="/saved-movies">
                    <Header/>
                    <SearchForm/>
                    <SavedMovies/>
                    <Footer/>
                </Route>
                <Route exact path="/signin">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Register/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>

        </CurrentUserContext.Provider>
    )
}
export default App;