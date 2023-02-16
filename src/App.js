import { useSelector } from 'react-redux';
import Version from './views/version';
import Routes from './routes';
//import useTimeout  from './useTimeout';

function App() {
  //useTimeout(() => alert('Su session expiro'), 1000);
  const { appLoaded } = useSelector(state => state.app);
  return (
    <>
      {!appLoaded && <Version />}
      {appLoaded && <Routes />}
    </>
  );
}

export default App;
