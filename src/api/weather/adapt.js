const round = (number) => {
    return Math.round(number);
}

const metersToKm = (m) => {
    let result = m / 1000;
    return parseFloat(result.toFixed(1));
}

const hPaToMmHg = (val) => { // гектопаскали в мм ртутного столба
    let result = val * 0.75006375541921;
    return result.toFixed(2);
}

const roundTo2 = (number) => {
    return Math.round(number * 100) / 100;
}

const kelvinToCelsius = (k) => {
    return Math.round((k - 273.15));
}

const transformCurrent = (weather) => {
    return {
        id: weather.id,
        city: weather.name,
        temp: round(weather.main.temp), // текущая температура воздуха
        descr: weather.weather[0].description, // Описание текущего состояния погодв на русском
        wind: weather.wind.speed, // скорость ветра (м/c)
        time: new Date(weather.dt * 1000), //Время обновления данных
        visibility: metersToKm(weather.visibility), //Видимость
        pressure: hPaToMmHg(weather.main.pressure), // Давление (мм/рт.столба)
        feeling: round(weather.main.feels_like), // температура по ощущению
        humidity: weather.main.humidity, // влажность
        clouds: weather.clouds.all, // облачность%
    }
}

const transformWeather = (weather) => {
    if (weather.cod !== 200) {
        return {...weather, error: true};
    }

    return transformCurrent(weather);
}

const transformForecast = (forecast, sunrise, sunset) => {
    const date = new Date(forecast.dt_txt);
    const time = date.getTime();

    return {
        temp: round(forecast.main.temp),
        date, time,
        timeString: forecast.dt_txt,
        main: forecast.weather[0].main,
        descr: forecast.weather[0].description,
        daytime: time > sunrise && time < sunset
    };
}

const Adapt = {
    transformCurrent,
    transformWeather,
    transformForecast
}

export default Adapt;