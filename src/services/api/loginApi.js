import { axiosPublic } from './axios';

const postLogin = (user, password) => {
  console.log("loginapi: successfull");
  return axiosPublic.post(
    '/auth/login',
    {
      user,
      password
    }
  )

};

export default postLogin;