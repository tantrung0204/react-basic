import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom"

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}

                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>
        )
    }
}

export default Nav;