import React from 'react';
import sunIcon from "../../assets/images/weather-state/sun.svg";

const WeeklyWeather = () => {
    return (
        <div className="weekly">
            <div className="weekly-table">
                <div className="weekly-table__row">
                    <div className="weekly-table__col weekly-table__col--name">Понедельник</div>
                    <div className="weekly-table__col weekly-table__col--icon"><img className="weekly-table__icon" src={sunIcon} alt=""/></div>
                    <div className="weekly-table__col weekly-table__col--temp">22° / 26°</div>
                </div>
                <div className="weekly-table__row">
                    <div className="weekly-table__col weekly-table__col--name">Вторник</div>
                    <div className="weekly-table__col weekly-table__col--icon"><img className="weekly-table__icon" src={sunIcon} alt=""/></div>
                    <div className="weekly-table__col weekly-table__col--temp">22° / 26°</div>
                </div>
                <div className="weekly-table__row">
                    <div className="weekly-table__col weekly-table__col--name">Среда</div>
                    <div className="weekly-table__col weekly-table__col--icon"><img className="weekly-table__icon" src={sunIcon} alt=""/></div>
                    <div className="weekly-table__col weekly-table__col--temp">22° / 26°</div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyWeather;