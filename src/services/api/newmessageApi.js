import { axiosPublic } from './axios';

const getNewMessage = (receiver, message) => {
    var sender = JSON.parse(localStorage.getItem('user'));
    
    return axiosPublic.post(
        '/message/new',
        {
            sender,
            receiver,
            message
        }
    )
};

export default getNewMessage;