import React from 'react'
import Typed from "react-typed";
import { Link } from "react-scroll";
import './Header.css'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Doğru adrestesİnİz... </h1>
                <h1>Av. Emir EROL </h1>
                <Typed
                    className="typed-text"
                    strings={["Medeni Hukuk", "Borclar Hukuku", "Miras Davalari", "Uzlasma", "Ceza Hukuku"]}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
                <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
            </div>
        </div>
    )
}

export default Header
