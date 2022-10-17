import Page from "../../components/page";
import { React, useState } from "react";
import List from "./messages";
import "../css/messages.css";
import ModalPicker from '../../components/modalPicker';
import ButtonNew from "../../components/buttonNew";

//para UX


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
        <h1 className="titulo">All Messages Received</h1>
        <ButtonNew></ButtonNew>
        <List input={inputText} />
      </div>
     
    </Page>

  );
}

export default MessagesUx;
