import React from "react"
import logo from "../Eidolon-logos.jpeg"
export default function Navbar() {
    return(
        <nav className = 'nav-container'>
            <img src = {logo} className = 'eidolon-logo'></img>
        </nav>
    )
}