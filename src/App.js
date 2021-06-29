import './App.css';
import AppRouter from './Router/Router'
import { createContext} from 'react'

export const AuthContext = createContext();

function App(props) {

  return (
    <AuthContext.Provider value={{}} >
    <AppRouter />
  </AuthContext.Provider>
  );
}

export default App;


