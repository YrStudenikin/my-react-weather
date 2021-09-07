import {SET_CURRENT, SET_DAILY, SET_LOADED} from "./types";
import {weatherApi} from "../../api/weather/openweather";

import Adapt from '../../api/weather/adapt';

export const setDaily = () => ({
    type: SET_DAILY,
});

export const setCurrent = obj => ({
    type: SET_CURRENT,
    payload: obj
});

export const setLoaded = isLoaded => ({
    type: SET_LOADED,
    payload: isLoaded
});

export const fetchCurrent = (lat, lng) => dispatch => {
    dispatch(setLoaded(false));
    weatherApi.getCurrent(lat, lng).then(data => {
        console.log(data);
        dispatch(setCurrent(Adapt.transformCurrent(data)));
    });
}