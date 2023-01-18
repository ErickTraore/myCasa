import React from "react";
import {Link} from "react-router-dom";
import "../../style/Navbar.scss";


export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar__accueil">
                <Link className='text-link' to="/"> Accueil </Link>
            </div>
            <div className="Navbar__services">
                <Link className='text-link' to="/services"> A Propos</Link>
            </div>
        </nav>
    )
}