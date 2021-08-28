import {createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import rootReducer from "./reducers";

/*код для установки дополнительных middleware, например, стоит redux dev tools + redux thunk*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;