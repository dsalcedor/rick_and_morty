// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

export default store;