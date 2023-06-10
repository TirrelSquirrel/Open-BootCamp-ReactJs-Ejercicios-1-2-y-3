import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";
import ComponenteB from "../pure/componenteB";

const ComponenteA = () => {
  const contacto1 = new Contacto(
    "Antonio",
    "Bautista",
    "email@email.com",
    true
  );
  const contacto2 = new Contacto("Megan", "Caro", "tia@chulisima.com", true);
  const contacto3 = new Contacto(
    "Brandy",
    "Loco",
    "perro@pelota.com",
    false
  );

  return (
    <div>
      <h1>Contactos: </h1>
      <ComponenteB contacto={contacto1}></ComponenteB>
      <ComponenteB contacto={contacto2}></ComponenteB>
      <ComponenteB contacto={contacto3}></ComponenteB>
    </div>
  );
};

ComponenteA.propTypes = {};

export default ComponenteA;
