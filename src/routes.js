import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './views/login';
import Messages from './views/messages';
import SignUp from './views/signup';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/messages' element={<Messages />}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Switch>
    </Router>
  );
}

export default Routes;
