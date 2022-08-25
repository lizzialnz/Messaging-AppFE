import { axiosPublic } from './axios';

const getSignUp = (user, email, password, name, phone) => {
    return axiosPublic.post(
        '/users/new',
        {
            user,
            email,
            password,
            name,
            phone
        }
    )
};

export default getSignUp;