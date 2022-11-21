import React from "react";
import {useContext} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    const currentUser = useContext(CurrentUserContext);
    return (
        <Route>
            {() => currentUser ? <Component  {...props} /> : <Redirect to="/signin"/>
            }
        </Route>
    )
}

export default ProtectedRoute;
