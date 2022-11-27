import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import * as MainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const jwt = localStorage.getItem('jwt');
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.goBack();
  }

  useEffect(() => {
    const path = location.pathname;
    if (!jwt) {
      return;
    }else{
      MainApi.getUser(jwt)
          .then((user) => {
            if (user) {
              setLoggedIn(true);
              setCurrentUser(user);
              history.push(path);
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },[loggedIn]);

  useEffect(() => {
    moviesApi
        .getMovies()
        .then((movies)=>{
          setMovies(movies);
        })
        .catch((err)=>{
            console.log(err);
        })
  }, [loggedIn]);

    useEffect(() => {
        if(!jwt){
            return;
        }else{
        MainApi
            .getSavedMovies(jwt)
            .then((movies)=>{
                setSavedMovies(movies);
            })
            .catch((err)=>{
                console.log(err);
            })
    }}, [loggedIn, currentUser]);

  function handleCardSave(card){
      if(!jwt){
          return;
      }else{
          MainApi.saveMovieCard(card, jwt)
              .then((res)=>{
                  setSavedMovies([res, ...savedMovies]);
                  console.log(savedMovies);
              })
              .catch((err)=>{
                  console.log(err);
                  console.log(savedMovies);
              })
      }
  }

  const onLogin = (email, password) => MainApi
    .authorize(email, password)
    .then((jwt) => {
      setLoggedIn(true);
      localStorage.setItem('jwt', JSON.stringify(jwt.token));
      history.push('/movies');
    })
    .catch((e) => {
      console.log(e);
    });

  const onLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }

  const onRegister = (email, password, name) => MainApi
      .register(email, password, name)
      .then((user)=>{
          setCurrentUser(user);
          onLogin(email, password);
      })
      .catch((e) => {
          console.log(e);
      });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute
          exact
          path="/movies"
          movies={movies}
          savedMovies={savedMovies}
          loggedIn={loggedIn}
          handleCardSave={handleCardSave}
          component={Movies}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          movies={movies}
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <ProtectedRoute
          exact
          path="/profile"
          loggedIn={loggedIn}
          onLogout={onLogout}
          component={Profile}
        />
        <Route exact path="/signin">
            {!loggedIn ? (<Login onLogin={onLogin} />) : (<Redirect to='/'/>)}
        </Route>
        <Route exact path="/signup">
           {!loggedIn ? ( <Register onRegister={onRegister}/>) : (<Redirect to='/'/>)}
        </Route>
        <Route exact path="*">
          <NotFound goBack = {goBack}/>
        </Route>
      </Switch>

    </CurrentUserContext.Provider>
  );
}
export default App;
