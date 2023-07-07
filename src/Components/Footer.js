import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Equipo</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Trabajo</span>
          <span>Testimonios</span>
          <span>Aplicación</span>
        </div>
        <div className="footer-section-columns">
          <span>999-888-777-111</span>
          <span>Ale@patitas.com</span>
          <span>Cintya@patitas.com</span>
          <span>Raul@patitas.com</span>
          <span>Maria@patitas.com</span>
          <span>Luis@patitas.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Términos y Condiciones</span>
          <span>Políticas de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
