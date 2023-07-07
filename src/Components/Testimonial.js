import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">Historias entre patas</h1>
        <p className="primary-text">
          En patitas valoramos todo el esfuerzo de nuestros voluntarios y compartimos sus experiencias.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Ser voluntario en Patitas es una alegría constante. Ayudar a los animales abandonados y verlos encontrar hogares amorosos me llena de felicidad. Estoy orgulloso de formar parte de este programa.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jonathan Pacheco</h2>
      </div>
    </div>
  );
};

export default Testimonial;
