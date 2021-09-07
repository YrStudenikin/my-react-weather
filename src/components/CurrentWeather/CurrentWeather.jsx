import React from 'react';
import sunIcon from "../../assets/images/weather-state/sun.svg";

const CurrentWeather = (props) => {
    const {descr, temp, visibility, pressure, clouds, wind, humidity, feeling} = props;

    return (
        <div className="current">
            <div className="current__location">
                <span className="current__location-name">Луганск, </span>
                <span className="current__location-country">Украина</span>
            </div>
            <div className="current__now">
                <div className="now-block now-block--main">
                    <div className="now-block__state">
                        <img className="now-block__state-icon" src={sunIcon} alt=""/>
                        <div className="now-block__state-name">{descr}</div>
                    </div>
                    <div className="now-block__temperature">
                        {temp}
                        <span className="now-block__temperature-mark">°</span>
                    </div>
                </div>
                <div className="now-block">
                    <div className="now-block__other">
                        <div className="now-block__other-item">
                            <span>Видимость &nbsp;</span>
                            <span>{visibility} км</span>
                        </div>
                        <div className="now-block__other-item">
                            <span>Давление &nbsp;</span>
                            <span>{pressure} мм</span>
                        </div>
                        <div className="now-block__other-item">
                            <span>облачность &nbsp;</span>
                            <span>{clouds}%</span>
                        </div>
                        <div className="now-block__other-item">
                            <span>Ветер &nbsp;</span>
                            <span>{wind} м/с</span>
                        </div>
                        <div className="now-block__other-item">
                            <span>Влажность &nbsp;</span>
                            <span>{humidity}%</span>
                        </div>
                        <div className="now-block__other-item">
                            <span>Ощущается как &nbsp;</span>
                            <span>{feeling}°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;