import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Alianza con Albergues",
      text: "Brindamos un hogar provisional a los animales encontrados en situación de abandono. Estos albergues cuentan con el respaldo de las municipalidades y están registrados en nuestra aplicación. Cuando un animal es reportado, se coordina su traslado al albergue correspondiente, donde recibirá atención médica, alimentación y cuidado mientras espera ser adoptado.",
    },
    {
      image: ChooseMeals,
      title: "Voluntariado",
      text: "Nuestra aplicación ofrece la posibilidad de registrarse como voluntario. Los voluntarios participan activamente identificando animales en situación de abandono y los llevan a los albergues para su adopción. También colaboran en campañas de adopción distritales y brindan paseos y compañía a los animales en los albergues. El voluntariado es certificado por la municipalidad, reconociendo su valiosa labor.",
    },
    {
      image: DeliveryMeals,
      title: "Contrata Talento",
      text: "Ofrecemos un programa de entrenamiento para los animales rescatados, preparándolos para desempeñar roles importantes en beneficio de la comunidad, como perros rescatistas, guías y de seguridad. También tenemos un programa para convertir a las mascotas en influencers, educándolas para participar en actividades promocionales.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nuestro Trabajo</p>
        <h1 className="primary-heading">Cómo funciona</h1>
        <p className="primary-text">
        Patitas registra animales abandonados en su app y los reporta con las municipalidades de cada distrito.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
