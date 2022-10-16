import { React, useState } from 'react'
import { axiosPrivate } from "../../services/api/axios";

const baseURL = "/message/all";

var get = [];
var set = [];

function getItems(set) { 
    get = set; 
 }
function putItems(){
   return get;
}

const Messages = ()=> {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axiosPrivate.get(baseURL).then((response) => {
      setPost(response.data);
      getItems(response.data);
    });
  }, []);
}

const datos = putItems();
console.log(datos)

function List(props) {
    return (
        <ul>
            {get.map((item) => (
                <li key={item._id}>{item.nombre}</li>
            ))}
        </ul>
    )
}

export default List;