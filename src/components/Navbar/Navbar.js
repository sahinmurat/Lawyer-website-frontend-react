import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
            <a className="navbar-brand" href="#">AV. EMIR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} /> 
            </button>
            {/* A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z –a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z  */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="#">Ana sayfa<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Hakkımızda</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Faalİyet Alanları</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">İletİşİm</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
