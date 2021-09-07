import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeeklyWeather from "../../components/WeeklyWeather/WeeklyWeather";
import {fetchCurrent} from "../../redux/actions/weather";

const Home = () => {
    const dispatch = useDispatch();

    const currentWeather = useSelector(({weather}) => weather.current);
    const isLoaded = useSelector(({weather}) => weather.isLoaded);

    React.useEffect(() => {
        dispatch(fetchCurrent('48.574041', '39.307815'));
    }, []);

    return (
        <main className="main">
            <div className="weather-content">
                {
                    isLoaded
                        ?  <CurrentWeather {...currentWeather}/>
                        : <div>...Загрузка</div>
                }
                <WeeklyWeather />
            </div>
        </main>
    );
};

export default Home;