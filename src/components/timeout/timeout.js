import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

const Timeout = () => {

    // -------------------------------------- Actividad del usuario -------------------------------------- //

// aqui comienza el codigo para el tiempo inactivo
  const [loggedIn, setLoggedIn] = useState(true);

  const Navigator = useNavigate();
  const navegar = () => {
    Navigator('/login');
  }
  //funcion para chequear la actividad y el logout
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkForInactivity = () => {
    // Extrayendo el tiempo del local storage
    const expireTime = localStorage.getItem('expireTime');

    // Si expira el tiempo de inactividad, se cierra la sesion
    if (expireTime < Date.now()) {
      console.log('Sesion expirada');
      setLoggedIn(false);
      alert('Sesion expirada');
      navegar();
    }
  };

  //Funcion para actualiza rel tiempo de inactividad
  const updateExpireTime = () => {
    // ingresando el tiempo de expiracion a una hora desde ahora
    const expireTime = Date.now() + 5000;

    // ingresando el tiempo in el local storage
    localStorage.setItem('expireTime', expireTime);
  };

  // useEffect para ingresar el intervalo a chequear la inactividad
  useEffect(() => {

    //cheaquear la inactividad cada 5 segundos
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000);

    //clean up = remover el intervalo
    return () => clearInterval(interval);
  }, [checkForInactivity]);

  // actualizar el tiempo de expiracion cada vez que el usuario interactua con la pagina
  useEffect(() => {

    // ingresando el valor iniciarl de la expiracion
    updateExpireTime();

    // ingresando eventos listener
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    // clean up = remover los eventos listener
    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);
    // -------------------------------------- Final Actividad del usuario -------------------------------------- //

    return (
        <>
        </>
    );
}

export default Timeout;