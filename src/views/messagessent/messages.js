import { axiosPrivate } from "../../services/api/axios";
import React from "react";
import "../css/messages.css";

/**aqui ira el session */ var valor = 'lizzi1'
var baseURL = `/message/msgsuser/${valor}`;
var data = []

//aqui se carga la lista de mensajes enviados para luego mostrarlos en el archivo index.js
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
  const filteredData = data.filter((e) => {
    //if no input the return the original
    if (props.input === '') {
      return e;
    }
    //return the item which contains the user input
    else {
      return e.nombre.toLowerCase().includes(props.input)
    }
  })
  return (
    <ul>
      <ul>
        {filteredData.map((item) => (
          <div class="cards">
            <div className="card">
              <div className="contenido-texto-card">
                <p key={item.identidad}><div className="receiver">To: {item.receiver}</div><div className="message"> {item.message}</div> <div className="hora">{item.created}</div></p>
              </div>
            </div>
          </div>
        ))}

      </ul>
    </ul>
  )
}

