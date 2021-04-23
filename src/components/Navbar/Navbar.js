import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
            {/* <a className="navbar-brand" href="#">AV. EMIR</a> */}
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>
            {/*Ç Ğ I İ Ş ç ğ ı ş */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="#" to="home" smooth={true}
                            offset={-110} >Ana sayfa<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="about" smooth={true}
                            offset={-110} >Hakkımızda</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="services" smooth={true}
                            offset={-110} >Faalİyet Alanları</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" smooth={true}
                            offset={-110} >Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="contacts" smooth={true}
                            offset={-110} >İletİşİm</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
