import React from "react";

import logo from "../../assets/images/cloud.svg";
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt=""/>
                    <div className="header__logo-title">React Погода</div>
                </div>
                <SearchInput/>
            </div>
        </header>
    );
};

export default Header;