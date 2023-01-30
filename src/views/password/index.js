import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignUp from "../../services/api/signUpApi";

//Aqui se importan los componentes para la vista
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import ButtonReturn from "../../components/buttonReturn";
import '../css/password.css';
import getPassword from '../../services/api/passwordApi';
import ErrorField from '../../components/errorField';

//aqui se crea el componente Password para cambiar la contraseña
const Password = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({
    email: ''
  });
  const [msj, setmsj] = useState(null);

  var emailValue = formValues.email;

  const onChangeHandler = (event) => {
    if(formValues.email){
      setmsj('');
    }else{
      setmsj('Debe ingresar un correo');
    }

    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    
    setFormValues(newFormValues);
  }
  const onPasswordClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(!formValues.email){
      setmsj('Debe ingresar un correo válido')
    }else{
    try {
      const data = await getPassword(
        formValues.email
      );
      Navigator("/login");
      console.log(data);
    } catch (ex) {
      console.log(ex);
      setmsj('El correo no está vinculado a una cuenta');
    }
  }
  }
  // const onLoginClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   Navigator("/login");
  // }
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
      <form className="form">
        <ButtonReturn></ButtonReturn>
        <h1 className="titulo">Recupera tu contraseña</h1>
        <div className='parrafo1'><p>Se enviará un correo a esta dirección con una contraseña temporal</p></div>
        <Field
          name="email"
          labelText="Email"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <ErrorField msj = {msj}></ErrorField>
        <div className="buttons">
          <Buttons>
            <button class="button button1" onClick={onPasswordClick}>Enviar</button>
          </Buttons>
        </div>
      </form>
    </Page>
  );
}
export default Password;
