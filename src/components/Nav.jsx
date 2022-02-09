import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
        </nav>
    );
};

export default Nav;