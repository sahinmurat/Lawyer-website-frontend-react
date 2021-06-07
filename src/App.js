import './App.css';
import AppRouter from './Router/Router'
import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

function App(props) {

  const session_token = localStorage.getItem('localToken');
  const [token, setToken] = useState(session_token);
  const [currentuser, setCurrentuser] = useState(null);

  useEffect(() => {
    axios.get('hhttps://emirback.herokuapp.com/auth/user', {
      headers: {
        'Authorization': `Token ${token}`
      }
    }).
      then((res) => {
        setCurrentuser(res.data);
      }).
      catch((err) => console.log(err))
  }, [token])


  return (
    <AuthContext.Provider value={{ token, setToken, currentuser, setCurrentuser }} >
    <AppRouter />
  </AuthContext.Provider>
  );
}

export default App;


