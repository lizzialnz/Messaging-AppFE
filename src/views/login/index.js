import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import localForage from "localforage";

//para ux
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from '../../components/buttons';
import ErrorField from "../../components/errorField";
import Button from '@mui/material/Button';
import '../css/login.css';

//para action
import loginApi from '../../services/api/loginApi';
import { setAuth } from '../../services/api/axios';
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGIN_JWT_SET = "LOGIN_JWT_SET";
const LOGIN_CLEAN_ERROR = "LOGIN_CLEAN_ERROR";

//principal del login
const Login = () => {

  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ user: '', password: '' });
  const { error } = useSelector(state => state.security);
  var userValue = formValues.user;
  var passwordValue = formValues.password;

  const onChangeHandler = (event) => {
    
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    if (error) {
      cleanLoginError(dispatch);
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
    try {
      await submitLogin(dispatch, formValues.user, formValues.password);
      //guardar en el storage el usuario que inicia saesion
      var us = formValues.user;
      localForage.setItem('user', us);

      // var us = await localForage.getItem('user');
      // var pas = await localForage.getItem('password');
      // alert('usuario: '+us+' contraseña: '+pas);

      Navigator('/messages');
    } catch (ex) {
      console.log(ex);
    }
  }
  const password = () => {
    Navigator('/login');
  }

  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
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
        {error && <ErrorField>{error}</ErrorField>}
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
    </Page>
  );
}

export default Login;

export const submitLogin = async (dispatch, user, password) => {
  if(user===""&&password===""){
    dispatch({ type: LOGIN_FAILED, payload: 'Llene todos los campos' });
  }
try {
    dispatch({ type: LOGIN_LOADING, payload: null });

    const { data } = await loginApi(user, password);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    console.log(data);
    setAuth(data.token);
    dispatch({ type: LOGIN_JWT_SET, payload: null });
  } catch (ex) {
    console.log(ex);
    dispatch({ type: LOGIN_FAILED, payload: 'Las credenciales no son válidas' });
    throw Error("Credenciales no Válidas");
  }
}

export const cleanLoginError = (dispatch) => {
  dispatch({ type: LOGIN_CLEAN_ERROR, payload: null });
}
