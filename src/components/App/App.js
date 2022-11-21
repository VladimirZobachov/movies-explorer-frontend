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
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";


function App(){
    const [films, setFilms] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState([]);

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

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            return;
        }
        MainApi.getUser(jwt)
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((err)=>{
                console.log(err);
            });
    };

    const onLogin = (email, password) => {
        return MainApi
            .authorize(email, password)
            .then((jwt) => {
                setLoggedIn(true);
                localStorage.setItem('jwt', JSON.stringify(jwt.token));
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        tokenCheck();
    }, []);

    useEffect(()=>{
        if(loggedIn){
            history.push("/movies");
        }
    }, [loggedIn, history])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route exact path="/">
                    <Header loggedIn = {loggedIn} />
                    <Main/>
                    <Footer/>
                </Route>
                <ProtectedRoute exact path="/movies"
                                films = {films}
                                loggedIn = {loggedIn}
                                component = {Movies} />
                <ProtectedRoute exact path="/saved-movies"
                                films = {films}
                                loggedIn = {loggedIn}
                                component = {SavedMovies}
                />
                <ProtectedRoute exact path="/profile"
                                loggedIn = {loggedIn}
                                component = {Profile}
                />
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
