import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo1 from './logo.png'
import logo2 from './hukuk.png'
import { useHistory } from 'react-router-dom';


const Navbar = ({ color }) => {
    const history = useHistory();
    // this usage is possible too; for different classname 
    // let {area} = useParams();
    // let alternative;
    // detail=== ? alternative = "navbar bbb navbar-expand-lg navbar-light" : 
    // alternative = "navbar mainn navbar-expand-lg navbar-light"
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${color}`}>
            <Link to="home" className="navbar-brand" smooth={true} onClick={() => history.push('/')}
                offset={-110}>
                {color === 'header' ? <img className="logo" src={logo1} alt="logo..." /> : <img className="logo" src={logo2} alt="logo..." />}
            </Link>
            {color === 'header' ?
                <>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" href="#" to="home" smooth={true}
                                    offset={-110} >Ana sayfa<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="about" smooth={true}
                                    offset={-110} >Hakk??m??zda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="services" smooth={true}
                                    offset={-110} >Faal??yet Alanlar??</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to='blogPage' smooth={true}
                                    offset={-110} >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="contacts" smooth={true}
                                    offset={-110} >??let??????m</Link>
                            </li>
                        </ul>
                    </div>
                </>

                : <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="home" smooth={true} onClick={()=> history.push('/')}
                                offset={-110} >Ana sayfa<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>}
        </nav>
    )
}

export default Navbar
