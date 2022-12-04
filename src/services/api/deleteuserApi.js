import { axiosPublic } from './axios';
const deleteUser = (codigo) => {
    return axiosPublic.delete(
        'users/delete/'+ codigo,
        {
            codigo
        }
    )
};

export default deleteUser;