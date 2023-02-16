import Page from "../../components/page";
import { React, useState, useEffect} from "react";
import List from "./messages";
import "../css/messages.css";
import ModalPicker from '../../components/modalPicker';
import ButtonNew from "../../components/buttonNew";
import { useNavigate } from 'react-router-dom';

import Timeout from "../../components/timeout/timeout";

//para UX aqui se muestra la lista de mensajes recibidos y se carga el archivo messages.js
const MessagesUx = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  console.log(inputHandler);

// // -------------------------------------- Actividad del usuario -------------------------------------- //

// // aqui comienza el codigo para el tiempo inactivo
//   const [loggedIn, setLoggedIn] = useState(true);

//   const Navigator = useNavigate();
//   const navegar = () => {
//     Navigator('/login');
//   }
//   //funcion para chequear la actividad y el logout
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const checkForInactivity = () => {
//     // Extrayendo el tiempo del local storage
//     const expireTime = localStorage.getItem('expireTime');

//     // Si expira el tiempo de inactividad, se cierra la sesion
//     if (expireTime < Date.now()) {
//       console.log('Sesion expirada');
//       setLoggedIn(false);
//       alert('Sesion expirada');
//       navegar();
//     }
//   };

//   //Funcion para actualiza rel tiempo de inactividad
//   const updateExpireTime = () => {
//     // ingresando el tiempo de expiracion a una hora desde ahora
//     const expireTime = Date.now() + 5000;

//     // ingresando el tiempo in el local storage
//     localStorage.setItem('expireTime', expireTime);
//   };

//   // useEffect para ingresar el intervalo a chequear la inactividad
//   useEffect(() => {

//     //cheaquear la inactividad cada 5 segundos
//     const interval = setInterval(() => {
//       checkForInactivity();
//     }, 5000);

//     //clean up = remover el intervalo
//     return () => clearInterval(interval);
//   }, [checkForInactivity]);

//   // actualizar el tiempo de expiracion cada vez que el usuario interactua con la pagina
//   useEffect(() => {

//     // ingresando el valor iniciarl de la expiracion
//     updateExpireTime();

//     // ingresando eventos listener
//     window.addEventListener("click", updateExpireTime);
//     window.addEventListener("keypress", updateExpireTime);
//     window.addEventListener("scroll", updateExpireTime);
//     window.addEventListener("mousemove", updateExpireTime);

//     // clean up = remover los eventos listener
//     return () => {
//       window.removeEventListener("click", updateExpireTime);
//       window.removeEventListener("keypress", updateExpireTime);
//       window.removeEventListener("scroll", updateExpireTime);
//       window.removeEventListener("mousemove", updateExpireTime);
//     };
//   }, []);
//     // -------------------------------------- Final Actividad del usuario -------------------------------------- //


  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
      <Timeout />
      {/* <div> loggedIn: {loggedIn.toString()}</div> */}
      <div className="form">
        <ModalPicker></ModalPicker>
        <h1 className="titulo">All Messages Sent</h1>
        <ButtonNew></ButtonNew>
        <List input={inputText} />
      </div>

    </Page>

  );
}

export default MessagesUx;


// let timer, currSeconds = 0;

// function resetTimer() {

//     /* Hide the timer text */
//     document.querySelector(".timertext")
//             .style.display = 'none';

//     /* Clear the previous interval */
//     clearInterval(timer);

//     /* Reset the seconds of the timer */
//     currSeconds = 0;

//     /* Set a new interval */
//     timer = 
//         setInterval(startIdleTimer, 1000);
// }

// // Define the events that
// // would reset the timer
// window.onload = resetTimer;
// window.onmousemove = resetTimer;
// window.onmousedown = resetTimer;
// window.ontouchstart = resetTimer;
// window.onclick = resetTimer;
// window.onkeypress = resetTimer;

// function startIdleTimer() {
      
//     /* Increment the
//         timer seconds */
//     currSeconds++;

//     /* Set the timer text
//         to the new value */
//     document.querySelector(".secs")
//         .textContent = currSeconds;

//     /* Display the timer text */
//     document.querySelector(".timertext")
//         .style.display = 'block';}
