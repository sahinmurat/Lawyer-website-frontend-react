import React from 'react'
import Typed from "react-typed";
import { Link } from "react-scroll";
import './Header.css'
{/* A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z –a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z  */}
const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
            <canvas></canvas>
                <h1>Doğru adrestesİnİz... </h1>
                <h1>Av. Emir EROL </h1>
                <Typed
                    className="typed-text"
                    strings={["Medeni Hukuk", "Borclar Hukuku", "Miras Davalari", "Uzlasma", "Ceza Hukuku"]}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
                <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">İletİŞİme geçİn</Link>
            </div>
        </div>
    )
}

export default Header
