import { axiosPublic } from './axios';
import React, { useState, useEffect } from "react";

const deleteUser = (codigo) => {
    // const [list, setList] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axiosPublic({
    //         url: `http://localhost:3001/api/v1/users/update/{codigo}${valor}`,
    //       });
  
    //       setList(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [setList]);
    
    return axiosPublic.delete(
        'users/delete/'+ codigo,
        {
            codigo
        }
    )
};

export default deleteUser;