import { userRegisterReducer, userSigninReducer } from "./Reducer/UserReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
const initialState = {
    userSignin:{
        //il faut le initialiser a null sinon il vas étre afficher coonnecter meme si !userInfo
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
   user:{
    userId: localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('userId'))
    : null,
   }
};
const Reducer = combineReducers({
    userSignin:userSigninReducer,

    userRegister: userRegisterReducer,
});

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    Reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;