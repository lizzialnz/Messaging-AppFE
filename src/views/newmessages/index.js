import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getNewMessage from "../../services/api/newmessageApi";

//para ux
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import ButtonReturn from "../../components/buttonReturn";
import '../css/newmessage.css';

const NewMessage = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({
    receiver: '',
    message: ''
  });

  var receiverValue = formValues.receiver;
  var messageValue = formValues.message;

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onSendNew = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await getNewMessage(
        formValues.receiver,
        formValues.message
      );
      Navigator("/messages");
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }
  const onMessageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/messages");
  }
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
      <form className="form">
        <h1 className="titulo">New Message</h1>
        <Field
          name="receiver"
          labelText="To"
          type="text"
          value={receiverValue}
          onChange={onChangeHandler}
        />
        <Field
          name="message"
          labelText="Message"
          type="text"
          value={messageValue}
          onChange={onChangeHandler}
        />
        <ValidationField receiver={receiverValue} message={messageValue}></ValidationField>
        <div className="buttons">
          <Buttons>
            <button class="button button1" onClick={onSendNew}>Enviar</button>
            <button class="button button2" onClick={onMessageClick}>Cancelar</button>
          </Buttons>
        </div>
      </form>
    </Page>
  );
}
export default NewMessage;
