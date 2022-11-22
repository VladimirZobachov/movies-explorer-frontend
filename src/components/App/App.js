import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import * as MainApi from '../../utils/MainApi';
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
  const [films, setFilms] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      });
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    MainApi.getUser(jwt)
      .then((user) => {
        if (user) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  useEffect(() => {
    tokenCheck();
  }, [loggedIn, history]);

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
          films={films}
          loggedIn={loggedIn}
          component={Movies}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          films={films}
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <ProtectedRoute
          exact
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route exact path="/signin">
          <Login onLogin={onLogin} />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>

    </CurrentUserContext.Provider>
  );
}
export default App;
