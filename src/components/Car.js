import React, { useState,useEffect } from "react";
import LogoOn from "../assets/on.gif";
import LogoOff from "../assets/off.gif";

export default function Car() {
  //ponemos la variable que va guardar el valor del estado / el nombre de la funcion que va a actualizar el estado / le entregamos un valor inicial
  const [started, setStarted] = useState(false);

  const [countKm, setCountKm] = useState(0);
 
  useEffect(() =>{
      document.title = `Coche ${started}`
  },[started]);

  const chekStateCar = () => {
    if (started) {
      return (
        <div>
          <h3>encendido</h3>
          <img src={LogoOn} width="200" height="250" alt="piola" />
        </div>
      );
    }
    return (
      <div>
        <h3>apagado</h3>
        <img src={LogoOff} width="200" height="250" alt="piola" />
      </div>
    );
  };

  const increaseKm = num => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("el coche esta apagado");
    }
  };
  return (
    <div>
      <h2>Nuestro coche esta: {chekStateCar()}</h2>
      <h2>Kilometros recorridos: {countKm}</h2>
      <button
        class="button"
        onClick={() => {
          setStarted(!started);
        }}
      >
        Encender/Apagar
      </button>
      <button
        class="button"
        onClick={() => {
          increaseKm(5);
        }}
      >
        Incrementar Km
      </button>
    </div>
  );
}
