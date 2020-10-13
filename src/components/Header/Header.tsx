import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header  = () => {
    return (
        <div className="header">
            <NavLink
                to="/"
                exact
                className="header__link"
            >
                Home
            </NavLink>
            <NavLink
                to="/pieChart"
                exact
                className="header__link"
            >
                Pie Chart
            </NavLink>
        </div>
    )
};

export default Header;
