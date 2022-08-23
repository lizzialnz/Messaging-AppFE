import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../components/page';
import { app_loaded, app_start_loading } from './versionAction';
import { setAuth } from '../../services/api/axios';
const h1VersionStyle = {
  backgroundColor: "#fff",
  textAlign: "center",
  padding: "50px 50px 50px 50px",
  boxShadow: "0px 3px 5px #bbb",
  textShadow: "0px 3px 5px #bbb",
}

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
  }, [user]);

  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <h1 style={h1VersionStyle}>Messages App <br /> v1.0.0</h1>
    </Page>
  )
}

export default Version;
