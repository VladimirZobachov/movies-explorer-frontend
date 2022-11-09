import Header from '../Header/Header';
import Main from "../Main/Main";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Footer from "../Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import SearchForm from "../Movies/SearchForm/SearchForm";

function App(){
    return (
        <CurrentUserContext.Provider value="1">
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
                    <Header/>
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Header/>
                    <Register/>
                </Route>
                <Route exact path="/profile">
                    <Header/>
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