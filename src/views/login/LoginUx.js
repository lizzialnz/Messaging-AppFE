import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from '../../components/buttons';
import ErrorField from "../../components/errorField";
import Button from '@mui/material/Button';
import '../css/login.css';

const LoginInUx = ({
  userValue = "",
  passwordValue = "",
  error = "",
  onChangeHandler = () => { },
  onSignUpClick = () => { },
  onLoginClick = () => { },
  password = () => {}
}) => {

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

export default LoginInUx;
