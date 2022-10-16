import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import putUser from "../../services/api/updateuserApi";

//para ux
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import ButtonReturn from "../../components/buttonReturn";
import '../css/signup.css';

const UpdateUser = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({
    user: '',
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  var userValue = formValues.user;
  var emailValue = formValues.email;
  var passwordValue = formValues.password;
  var nameValue = formValues.name;
  var phoneValue = formValues.phone;

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onUpdateClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await putUser(
        formValues.user,
        formValues.email,
        formValues.password,
        formValues.name,
        formValues.phone
      );
      Navigator("/messages");
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }
  const onMessagesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/messages");
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
        <h1 className="titulo">Actualiza tu Información</h1>
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
          name="name"
          labelText="Nombre"
          type="text"
          value={nameValue}
          onChange={onChangeHandler}
        />
        <Field
          name="phone"
          labelText="Teléfono"
          type="text"
          value={phoneValue}
          onChange={onChangeHandler}
        />
        <ValidationField email={emailValue} password={passwordValue} name={nameValue} phone={phoneValue}></ValidationField>
        <div className="buttons">
          <Buttons>
            <button class="button button1" onClick={onUpdateClick}>Actualizar</button>
            <button class="button button2" onClick={onMessagesClick}>Cancelar</button>
          </Buttons>
          <button class="button button3" onClick={onLoginClick}>Eliminar mi cuenta</button>
        </div>
      </form>
    </Page>
  );
}
export default UpdateUser;
