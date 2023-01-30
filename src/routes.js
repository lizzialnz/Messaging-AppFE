import { BrowserRouter, Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './views/login';
import MessagesSent from './views/messagessent';
import Messagesrec from './views/messagesrec'
import SignUp from './views/signup';
import Password from './views/password';
import UpdateUser from './views/updateuser';
import NewMessage from './views/newmessages';
import Paginaerror from './views/Paginaerror';
import { useState } from 'react';

const Routes = () => {
  const [token, setToken] = useState();
  // if (!token) {
  //   console.logs('token: ' + token);
  //   return (
  //     <BrowserRouter>
  //       <Switch>
  //         <Route path='/login' element={<Login setToken={setToken} />} />
  //       </Switch>
  //     </BrowserRouter>)
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/messages' element={<MessagesSent />} />
        <Route path='/messagesrec' element={<Messagesrec />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/password' element={<Password />} />
        <Route path='/updateuser' element={<UpdateUser />} />
        <Route path='/newmessage' element={<NewMessage />} />
        <Route path='*' element={<Paginaerror />} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
