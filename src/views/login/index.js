import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

//para ux
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from '../../components/buttons';
import ErrorField from "../../components/errorField";
import Button from '@mui/material/Button';
import '../css/login.css';

//para action
import { setAuth } from '../../services/api/axios';
import postLogin from '../../services/api/loginApi';
import { axiosPrivate } from "../../services/api/axios";
var baseURL = '/authapi/security';

//principal del login
const Login = ({ setToken }) => {
  const [msj, setmsj] = useState(null);
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ user: '', password: '' });
  var userValue = formValues.user;
  var passwordValue = formValues.password;

  const onChangeHandler = (event) => {
    if (formValues.user && formValues.password) {
      setmsj('');
    } else {
      setmsj('Debe llenar todos los campos');
    }

    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onSignUpClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/signup');
  }
  const onLoginClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!formValues.user && !formValues.password) {
      setmsj('Debe ingresar un usuario y contraseña');
    } else {
      try {
        const data = await postLogin(
          formValues.user,
          formValues.password
        );
        console.log(data)
        // const  token = data.token;
        // setToken(token);
        //guardar en el storage el usuario que inicia saesion
        
       //**aqui irá el session  */
        
        Navigator('/messages');

      } catch (ex) {
        console.log(ex);
        setmsj('Nombre de usuario o contraseña incorrecto');
       
      }
    }

  }

  const password = () => {
    Navigator('/password');
  }

  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
      <div className='login-wrapper'>
      <form ClassName="form">
        <h1 className="titulo">Iniciar Sesión</h1>
        <Field
          name="user"
          labelText="Usuario"
          type="text"
          value={userValue}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={passwordValue}
          onChange={onChangeHandler}
        />
        <ErrorField msj={msj}></ErrorField>
        <div className="buttons">
          <Buttons>
            <button className="button button1" onClick={onLoginClick}>Iniciar Sesión</button>
            <button className="button button2" onClick={onSignUpClick}>¿No tienes cuenta?</button>
          </Buttons>
        </div>
        <div className="buttons">
          <Button onClick={password}>¿Olvidaste tu Contraseña?</Button>
        </div>

      </form>
      </div>
    </Page>
  );
}

export default Login;
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}