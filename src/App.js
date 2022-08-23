import { useSelector } from 'react-redux';
import Version from './views/version';
import Routes from './routes';

function App(){
  const { appLoaded } = useSelector(state => state.app);
  return (
    <>
      {!appLoaded && <Version/>}
      {appLoaded && <Routes/>}
    </>
  );
}

export default App;
