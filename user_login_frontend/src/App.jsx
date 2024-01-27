import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Vedett from './components/Vedett';
import Menu from './components/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">User Login</h1>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/vedett' element={<Vedett />}/>
          <Route path='*' element={<Navigate to={'/'} />}/>
        </Routes>
      </Router>
      <ToastContainer />
     
    </div>
  )
}

export default App
