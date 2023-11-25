import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Tanulok from './components/Tanulok';
import FoOldal from './components/FoOldal';
import TanuloForm from './components/TanuloForm';
import TanuloFormMod from './components/TanuloFormMod';
import TanuloForm2 from './components/TanuloForm2';
import { TanuloProvider } from './context/TanuloContext';

function App() {
 

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Tanuló nyilvántartás</h1>
      <Router>
        <TanuloProvider>
        <Navbar />
        <Routes>
           <Route path='/' element={<FoOldal />} />
           <Route path='/tanulok' element={<Tanulok />} />
           <Route path='/ujtanulo' element={<TanuloForm2 />} />
           
           <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        </TanuloProvider>
      </Router>

      
    </div>
  )
}

export default App
