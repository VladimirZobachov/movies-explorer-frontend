import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Popup from "../Popup/Popup";

function App() {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [isInfoTooltip, setIsInfoTooltip] = useState({
        isOpen: false,
        statusOk: true,
        textStatus: '',
    });
    const [isLoad, setIsLoad] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');
    const handleOpenPopup = ()=>{
        setIsOpenPopup(true);
    }
    const handleClosePopup = ()=>{
        setIsOpenPopup(false);
    }

    useEffect(() => {
        const path = location.pathname;
        if (!jwt) {
            return;
        } else {
            MainApi.getUser(jwt)
                .then((user) => {
                    if (user) {
                        setLoggedIn(true);
                        setCurrentUser(user);
                        history.push(path);
                    }
                })
                .catch((err) => {
                    setIsInfoTooltip({
                        isOpen: true,
                        statusOk: false,
                        textStatus: err.message,
                    })
                });
        }
    }, [loggedIn]);

    useEffect(() => {
        moviesApi
            .getMovies()
            .then((movies) => {
                setMovies(movies);
            })
            .catch((err) => {
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: err.message,
                })
            })
    }, [loggedIn]);

    useEffect(() => {
        if (!jwt) {
            return;
        } else {
            MainApi
                .getSavedMovies(jwt)
                .then((movies) => {
                    const userMovies = movies.filter((item) => item.owner === currentUser._id);
                    setSavedMovies(userMovies);
                })
                .catch((err) => {
                    setIsInfoTooltip({
                        isOpen: true,
                        statusOk: false,
                        textStatus: err.message,
                    })
                })
        }
    }, [loggedIn, currentUser]);

    const handleCardSave = (card) => {
        if (!jwt) {
            return false;
        } else {
            MainApi.saveMovieCard(card, jwt)
                .then((res) => {
                    setSavedMovies([res, ...savedMovies]);
                })
                .catch((err) => {
                    setIsInfoTooltip({
                        isOpen: true,
                        statusOk: false,
                        textStatus: err.message,
                    })
                })
        }
    }

    const handleCardDel = (card) => {
        if (!jwt) {
            return false;
        } else {
            const deletingMovie = savedMovies.filter((item) => item.movieId == card.id || card.movieId);
            MainApi.deleteMovieCard(deletingMovie[0]._id, jwt)
                .then(() => {
                    MainApi.getSavedMovies(jwt)
                        .then((res) => {
                            setSavedMovies(res);
                        })
                        .catch((err) => {
                            setIsInfoTooltip({
                                isOpen: true,
                                statusOk: false,
                                textStatus: err.message,
                            })
                        })
                })
                .catch((err) => {
                    setIsInfoTooltip({
                        isOpen: true,
                        statusOk: false,
                        textStatus: err.message,
                    })
                })
        }
    }

    const onRegister = (email, password, name) => {
        MainApi
            .register(email, password, name)
            .then((user) => {
                setCurrentUser(user);
                onLogin(email, password);
            })
            .catch((err) => {
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: err.message,
                })
            });
    }

    const onLogin = (email, password) => {
        MainApi
            .authorize(email, password)
            .then((jwt) => {
                setLoggedIn(true);
                localStorage.setItem('jwt', JSON.stringify(jwt.token));
                history.push('/movies');
            })
            .catch((err) => {
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: err.message,
                })
            });
    }

    const onLogout = () => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        history.push('/');
    }

    const onProfile = (name, email) => {
        MainApi
            .updateUser(name, email, jwt)
            .then((user) => {
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: true,
                    textStatus: 'Данные пользователя успешно обновлены',
                })
                setCurrentUser(user)
            })
            .catch((err) => {
                setIsInfoTooltip({
                    isOpen: true,
                    statusOk: false,
                    textStatus: err.message,
                })
            })
    }

    const onCloseInfoTooltip = () => {
        setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
    }

    const goBack = () => {
        history.go(-2);
    }

    return (
        <>
            {
                isLoad ? (<Preloader/>) : (
                    <CurrentUserContext.Provider value={currentUser}>
                        <Switch>
                            <Route exact path="/">
                                <Header
                                    loggedIn={loggedIn}
                                    handleOpenPopup={handleOpenPopup}
                                />
                                <Main/>
                                <Footer/>
                            </Route>
                            <ProtectedRoute
                                exact
                                path="/movies"
                                movies={movies}
                                savedMovies={savedMovies}
                                loggedIn={loggedIn}
                                handleCardSave={handleCardSave}
                                handleCardDel={handleCardDel}
                                setIsInfoTooltip={setIsInfoTooltip}
                                setIsLoad={setIsLoad}
                                handleOpenPopup={handleOpenPopup}
                                component={Movies}
                            />
                            <ProtectedRoute
                                exact
                                path="/saved-movies"
                                movies={savedMovies}
                                loggedIn={loggedIn}
                                handleCardDel={handleCardDel}
                                setIsInfoTooltip={setIsInfoTooltip}
                                setIsLoad={setIsLoad}
                                handleOpenPopup={handleOpenPopup}
                                component={SavedMovies}
                            />
                            <ProtectedRoute
                                exact
                                path="/profile"
                                loggedIn={loggedIn}
                                onLogout={onLogout}
                                onProfile={onProfile}
                                handleOpenPopup={handleOpenPopup}
                                component={Profile}
                            />
                            <Route exact path="/signin">
                                {!loggedIn ? (<Login onLogin={onLogin}/>) : (<Redirect to='/'/>)}
                            </Route>
                            <Route exact path="/signup">
                                {!loggedIn ? (<Register onRegister={onRegister}/>) : (<Redirect to='/'/>)}
                            </Route>
                            <Route exact path="*">
                                <NotFound goBack={goBack}/>
                            </Route>
                        </Switch>
                    <InfoTooltip
                        status={isInfoTooltip}
                        onClose={onCloseInfoTooltip}
                    />
                    <Popup
                        isOpenPopup={isOpenPopup}
                        handleClosePopup={handleClosePopup}
                    />
                    </CurrentUserContext.Provider>
                )
            }
        </>
    );
}

export default App;
