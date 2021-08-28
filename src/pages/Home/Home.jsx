import React from 'react';

import sunIcon from "../../assets/images/weather-state/sun.svg";

const Home = () => {
    return (
        <main className="main">
            <div className="weather-content">
                <div className="current-city">
                    <div className="current-city__location">
                        <span className="current-city__location-name">Луганск, </span>
                        <span className="current-city__location-country">Украина</span>
                    </div>
                    <div className="current-city__now">
                        <div className="now-block now-block--main">
                            <div className="now-block__state">
                                <img className="now-block__state-icon" src={sunIcon} alt=""/>
                                <div className="now-block__state-name">Солнечно</div>
                            </div>
                            <div className="now-block__temperature">
                                28
                                <span className="now-block__temperature-mark">°</span>
                            </div>
                        </div>
                        <div className="now-block">
                            <div className="now-block__other">
                                <div className="now-block__other-item">
                                    <span>Видимость &nbsp;</span>
                                    <span>20 км</span>
                                </div>
                                <div className="now-block__other-item">
                                    <span>Давление &nbsp;</span>
                                    <span>760,00 мм</span>
                                </div>
                                <div className="now-block__other-item">
                                    <span>По ощущениям &nbsp;</span>
                                    <span>28°</span>
                                </div>
                                <div className="now-block__other-item">
                                    <span>Ветер &nbsp;</span>
                                    <span>4 м/с</span>
                                </div>
                                <div className="now-block__other-item">
                                    <span>Влажность &nbsp;</span>
                                    <span>26%</span>
                                </div>
                                <div className="now-block__other-item">
                                    <span>Точка росы &nbsp;</span>
                                    <span>7°</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="current-city__weekly">
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
                </div>
            </div>
        </main>
    );
};

export default Home;