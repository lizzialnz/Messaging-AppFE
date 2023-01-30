import { axiosPublic } from './axios';

const getNewMessage = (receiver, message) => {
   /**aqui ira el session */ var sender = 'lizzi1'
    
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