import SignUpUx from "./signUpUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignUp from "../../services/api/signUpApi";

const SignUp = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    user: '',
    email: '',
    password: '',
    fullname: '',
    phone: ''});
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
    <SignUpUx
      userValue={formValues.user}
      emailValue = {formValues.email}
      passwordValue = {formValues.password}
      fullnameValue = {formValues.fullname}
      phoneValue = {formValues.phone}
      onSignUpClick={onSignUpClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default SignUp;
