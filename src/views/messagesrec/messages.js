import { axiosPrivate } from "../../services/api/axios";
import React from "react";
import "../css/messages.css";
import localForage from "localforage";

//cambiar el usuario estático por una peticion get
var valor="lizzi1"
// var sender = localForage.getItem('user').then(function (value) {
//   alert(sender);
// }).catch(function(err) {
//   console.error(err);
// });


const baseURL = `/message/receiver/${valor}`;
var data = []

export default function App(props) {
  const [ post, setPost] = React.useState(null);
  React.useEffect(() => {
    axiosPrivate.get(baseURL).then((response) => {
      setPost(response.data);
      data = response.data;
    });
  }, []);

  console.log(data);
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.nombre.toLowerCase().includes(props.input)
    }
  })
  return (
    <ul>
      <ul>
        {filteredData.map((item) => (
          <div class="cards">
            <div className="card">
              <div className="contenido-texto-card">
                <p key={item.identidad}><div className="receiver">From: {item.sender}</div><div className="message"> {item.message}</div> <div className="hora">{item.created}</div></p>
              </div>
            </div>
          </div>
        ))}

      </ul>
    </ul>
  )
}

