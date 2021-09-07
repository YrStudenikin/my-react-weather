import {combineReducers} from "redux";
import weather from "./weather";

const rootReducer = combineReducers({
    /* короткая запись в обьект при одинаковых названиях (filters: filters (reducer) ) */
    weather,
});

export default rootReducer;