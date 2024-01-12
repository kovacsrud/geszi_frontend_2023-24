import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Cocktails from './components/Cocktails';
import { CocktailProvider } from './context/CocktailContext';

function App() {
 

  return (
    <div>
     
      
      <Router>
      <CocktailProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cocktails' element={<Cocktails />}/>
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        </CocktailProvider>
      </Router>
      
     
    </div>
  )
}

export default App
