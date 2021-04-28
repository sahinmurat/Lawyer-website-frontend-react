import React from 'react'
import Typed from "react-typed";
import { Link } from "react-scroll";
import './Header.css'
import Navbar from '../Navbar/Navbar';
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      {/* where you want to use Particles, add it on this Component*/}
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "rgb(220, 20, 60)"
              }
            }
          }
        }}
      />
      {/* you can use  Navbar with an addition on a component */}
      <Navbar color ='header' />
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
