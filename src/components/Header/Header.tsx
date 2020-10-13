import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header  = () => {
    const location = useLocation();

    return (
        <div className="header">
            <NavLink
                to="/"
                exact
                className="header__link"
                activeClassName={
                    location.pathname === "/"
                        ? "header__link--active"
                        : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/pieChart"
                exact
                className="header__link"
                activeClassName={
                    location.pathname === "/pieChart"
                        ? "header__link--active"
                        : ""
                }
            >
                Pie Chart
            </NavLink>
        </div>
    )
};

export default Header;
