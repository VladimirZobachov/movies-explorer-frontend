import Header from '../Header/Header';
import Main from "../Main/Main";
import * as MainApi from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Footer from "../Footer/Footer";
import {Route, Switch, useHistory} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import {useEffect, useState} from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";


function App(){
    const [films, setFilms] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();


    useEffect(()=>{
        if(loggedIn){
            history.push("/movies")
        }
    }, [loggedIn, history])

    useEffect(()=>{
        fetch("https://api.nomoreparties.co/beatfilm-movies", {
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((data)=> {
                setFilms(data);
            })
    }, [])

    const onLogin = (email, password) => {
        return MainApi
            .authorize(email, password)
            .then((user) => {
                setLoggedIn(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <CurrentUserContext.Provider value="1">
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Main/>
                    <Footer/>
                </Route>
                <ProtectedRoute exact path="/movies"
                                films = {films}
                                loggedIn = {loggedIn}
                                component={Movies} />

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
                <Route exact path="/signin">
                    <Header/>
                    <Login onLogin={onLogin}/>
                </Route>
                <Route exact path="/signup">
                    <Header/>
                    <Register/>
                </Route>
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>

        </CurrentUserContext.Provider>
    )
}
export default App;
