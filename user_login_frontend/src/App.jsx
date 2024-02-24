import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Vedett from './components/Vedett';
import Menu from './components/Menu';
import ImageUpload from './components/ImageUpload';
import Images from './components/Images';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext';
import { ImageProvider } from './context/ImageContext';

function App() {
 

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">User Login</h1>
      
      <UserProvider>
      <ImageProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/vedett' element={<Vedett />}/>
          <Route path='/imageupload' element={<ImageUpload />} />
          <Route path='/images' element={<Images />} />
          <Route path='*' element={<Navigate to={'/'} />}/>
        </Routes>
      </Router>
      <ToastContainer />
      </ImageProvider>
      </UserProvider>
      
     
    </div>
  )
}

export default App
