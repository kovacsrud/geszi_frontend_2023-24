import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import Menu from './components/Menu';

function App() {
 

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Rick and Morty</h1>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/characters' element={<Characters />}/>
          <Route path='/episodes' element={<Episodes />}/>
          <Route path='/locations' element={<Locations />}/>
          <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
