import * as axios from "axios";

const WEATHER_API_KEY = 'bc8ff23bc880d1ef5bdc7db8535c9140';
const CURRENT_API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=48.574041&lon=39.307815&appid=bc8ff23bc880d1ef5bdc7db8535c9140&units=metric&lang=ru';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const weatherApi = {
    getCurrent(lat, lng) {
        return instance.get('weather', {
            params: {
                lat: lat,
                lon: lng,
                units: 'metric',
                lang: 'ru',
                appid: WEATHER_API_KEY,
            }
        }).then(response => {
            return response.data;
        });
    }
}