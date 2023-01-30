import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignUp from "../../services/api/signUpApi";

//aqui se importan los componentes para la vista
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import ButtonReturn from "../../components/buttonReturn";
import '../css/signup.css';


//aqui se crea el componente SignUp para crear una nueva cuenta
const SignUp = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({
    user: '',
    email: '',
    password: '',
    fullname: '',
    phone: ''
  });

  var userValue = formValues.user;
  var emailValue = formValues.email;
  var passwordValue = formValues.password;
  var fullnameValue = formValues.fullname;
  var phoneValue = formValues.phone;

  const onChangeHandler = (event) => {
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
    try {
      const data = await getSignUp(
        formValues.user,
        formValues.email,
        formValues.password,
        formValues.fullname,
        formValues.phone
      );
      Navigator("/login");
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/login");
  }
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
      <form className="form">
        <ButtonReturn></ButtonReturn>
        <h1 className="titulo">Crea tu cuenta</h1>
        <Field
          name="user"
          labelText="Usuario"
          type="text"
          value={userValue}
          onChange={onChangeHandler}
        />
        <Field
          name="email"
          labelText="Email"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={passwordValue}
          onChange={onChangeHandler}
        />
        <Field
          name="fullname"
          labelText="Nombre"
          type="text"
          value={fullnameValue}
          onChange={onChangeHandler}
        />
        <Field
          name="phone"
          labelText="Teléfono"
          type="text"
          value={phoneValue}
          onChange={onChangeHandler}
        />
        <ValidationField user={userValue} email={emailValue} password={passwordValue} name={fullnameValue} phone={phoneValue}></ValidationField>
        <div className="buttons">
          <Buttons>
            <button class="button button1" onClick={onSignUpClick}>Crear Cuenta</button>
            <button class="button button2" onClick={onLoginClick}>¿Ya tienes cuenta?</button>
          </Buttons>
        </div>
      </form>
    </Page>
  );
}
export default SignUp;
