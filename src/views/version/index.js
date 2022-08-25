import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../components/page';
import { app_loaded, app_start_loading } from './versionAction';
import { setAuth } from '../../services/api/axios';
import '../css/version.css'
import Logo from '../../components/images/logosintexto.png';

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
