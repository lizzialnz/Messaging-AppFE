import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from '../../components/buttons';
import ErrorField from "../../components/errorField";
import Button from '@mui/material/Button';


const LoginInUx = ({
  userValue = "",
  passwordValue = "",
  error = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { },
  password = () => {}
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Messages LApp"
    >
       
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{textAlign: "center", textShadow: "0px 3px 5px rgb(0,0,0, 0.5)"}}>Iniciar Sesión</h1>
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
        <div style={{textAlign: "center"}}>
        <Buttons>
          <button className="button button1" onClick={onLoginClick}>Iniciar Sesión</button>
          <button className="button button2" onClick={onSignInClick}>¿No tienes cuenta?</button>
        </Buttons>
        </div>
        <div style={{textAlign: "center"}}>
        <Button onClick={password}>¿Olvidaste tu Contraseña?</Button>
        </div>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}

export default LoginInUx;
