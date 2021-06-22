import React from "react";
import './Footer.css'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer wrapper" >
      <div className="container wr">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Karabaş Mah. Müneccim Arif Sk. No:8 D:2 İzmit/Kocaeli</p>
            </div>
            <div className="d-flex">
              <p><a href="tel:+905437792299">+90 543 779 22 99</a></p>
            </div>
            <div className="d-flex">
              <p>av.hasanemirerol@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" smooth={true} to="home" offset={-110}  >Ana Sayfa <span className="sr-only">(current)</span></Link>
                <br />
                <Link className="footer-nav" smooth={true} to="about" offset={-110} >Hakkimizda</Link>
                <br />
              </div>
              <div className="col">
                <Link smooth={true} to="services" offset={-110} className="footer-nav" href="#">Faaliyet Alanlari</Link>
                <br />
                <Link smooth={true} to="contacts" offset={-110} className="footer-nav" >Iletisim</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/"}
                quote={"Avukat"}
                hashtag="#avukat"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com//"}
                quote={"Avukat"}
                hashtag="#avukat"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"www.linkedin.com/in/"}
              // quote={"Avukat"}
              // hashtag="#avukat"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Emir | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
