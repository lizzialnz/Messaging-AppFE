import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../components/page';
import { setAuth } from '../../services/api/axios';
import '../css/version.css'
import Logo from '../../components/images/logosintexto.png';

//para el action de carga de la aplicacion
export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';

export const app_start_loading = (dispatch) => {
  dispatch({
      type: APP_LOADING,
      payload: true,
  });
}

export const app_stop_loading = (dispatch) => {
  dispatch({
      type: APP_LOADING,
      payload: false,
  });
}

export const app_loaded = (dispatch) => {
  dispatch({
      type: APP_LOADED,
      payload: true,
  });
}

//aqui se crea el componente para mostrar la version de la aplicacion cuando existe tiempo de carga
const Version = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.security);
  useEffect(() => {
    app_start_loading(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (user.token) {
      setAuth(user.token);
    }
    app_loaded(dispatch);
  }, [user,dispatch]);

  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <div className="h1VersionStyle">
      <img src={Logo} alt=""></img>
      <h1>Messages LApp <br /> v1.0.0</h1>
      </div>
    </Page>
  )
}

export default Version;
