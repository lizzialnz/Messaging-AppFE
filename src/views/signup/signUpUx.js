import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import ButtonReturn from "../../components/buttonReturn";
import '../css/signup.css';

const SignUpUx = ({
  userValue = "",
  emailValue = "",
  passwordValue = "",
  fullnameValue = "",
  phoneValue = "",
  onChangeHandler = () => { },
  onSignUpClick = () => { },
  onLoginClick = () => { }
}) => {
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

export default SignUpUx;
