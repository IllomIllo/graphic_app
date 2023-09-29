import React from 'react';
import "../styles/toolbar.scss"
import "../styles/buttons.scss"
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/about"} className="navbar_btn">MAIN</Link>
            <Link to={"/paint/1-4"} className="navbar_btn">Labs 1-4</Link>
            <Link to={"/paint/5"} className="navbar_btn">Labs 5</Link>

        </div>
    );
};

export default Navbar;