import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nosotros</p>
        <h1 className="primary-heading">
        Bienvenido a Patitas,
        </h1>
        <p className="primary-text">
        Un programa implementado en las municipalidades para ayudar a los animales callejeros. Nuestra aplicación permite a los vecinos reportar animales abandonados y encontrar albergues para su cuidado y adopción. Además, buscamos voluntarios jóvenes que deseen participar en la identificación de animales y en campañas de adopción.
        </p>
        <p className="primary-text">
        También ofrecemos programas de entrenamiento para perros rescatados y mascotas "influencers". Organizamos ferias de donativos y estamos desarrollando un chip de última tecnología para comprender y ubicar a los animales. Únete a nuestra comunidad y juntos hagamos una diferencia en la vida de estos animales necesitados.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Unirme</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mira nuestro video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
