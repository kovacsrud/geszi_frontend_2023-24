import Header from "./components/Header";
import Menu from "./components/Menu";
import Eloadok from "./components/Eloadok";
import Fooldal from "./components/Fooldal";
import Kategoriak from "./components/Kategoriak";
import UjKategoria from "./components/UjKategoria";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';


function App() {
 

  return (
    <div>
        <Header fejlecSzoveg={"Chinoook adatbázis"} />
        <BrowserRouter>
         <Menu/>
         <Routes>
           <Route path="/" element={<Fooldal />} />
           <Route path="/eloadok" element={<Eloadok />} />
           <Route path="/kategoriak" element={<Kategoriak />} />
           <Route path="/ujkategoria" element={<UjKategoria />} />
           <Route path="*" element={<Navigate to={"/"} />} />
         </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}

export default App
