import Page from "../../components/page";
import { React, useState, useEffect } from "react";
import List from "./messages";
import "../css/messages.css";
import ModalPicker from '../../components/modalPicker';
import ButtonNew from "../../components/buttonNew";

//para UX aqui se muestra la lista de mensajes recibidos y se carga el archivo messages.js
const MessagesUx = () => {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  console.log(inputHandler);

  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
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
