import {SET_LOADED, SET_CURRENT, SET_DAILY} from "../actions/types";

const initialState = {
    current: {},
    daily: {},
    isLoaded: false,
}

const weather = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT: {
            return {
                ...state,
                current: action.payload,
                isLoaded: true,
            }
        }
        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        case SET_DAILY: {
            return {}
        }
        default:
            return state;
    }
}

export default weather;

