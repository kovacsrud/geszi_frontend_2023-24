import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import KutyaFajtak from './components/KutyaFajtak';
import KutyaNevek from './components/KutyaNevek';
import KutyaForm from './components/KutyaForm';
import Main from './components/Main';
import KutyaLista from './components/KutyaLista';
import Menu from './components/Menu';


function App() {
 

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Állatorvosi rendelő</h1>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/kutyanevek' element={<KutyaNevek />}/>
        <Route path='/kutyafajtak' element={<KutyaFajtak />} />
        <Route path='/kutyalista' element={<KutyaLista />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
