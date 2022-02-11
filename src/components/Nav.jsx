import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link className="navButtons" to="/">Home</Link>
            <Link className="navButtons" to="/reviews">Reviews</Link>
            <Link className="navButtons" to="/users">Users</Link>
        </nav>
    );
};

export default Nav;