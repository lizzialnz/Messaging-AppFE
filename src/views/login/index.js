import LoginUx from "./loginUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitLogin, cleanLoginError } from './loginActions';

const Login = () => {
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ user: '', password: '' });
  const { isLoading, error } = useSelector(state => state.security);

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
      Navigator('/messages')
    } catch (ex) {
      console.log(ex);
    }
  }
  const password = () => {
    Navigator('/messages');
  }

  return (
    <LoginUx
      passwordValue={formValues.password}
      userValue={formValues.user}
      onSignUpClick={onSignUpClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
      password={password}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Login;
