import { axiosPublic } from './axios';

const getPassword = (email) => {
    return axiosPublic.post(
        '/auth/recover',
        {
            email
        }
    )
};

export default getPassword;