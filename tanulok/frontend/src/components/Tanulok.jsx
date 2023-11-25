import {useContext } from "react"
import TanuloContext from '../context/TanuloContext';
import Tanulo from './Tanulo';


function Tanulok() {

    const {tanulok,isLoading,update}=useContext(TanuloContext);

    


    // const[tanulok,setTanulok]=useState([]);
    // const[isLoading,setIsLoading]=useState(false);
    // const[refresh,setRefresh]=useState(false);

    // const update=()=>{
    //   setRefresh(prev=>!prev);
    // }

    // useEffect(()=>{
    //   setIsLoading(true);
    //   fetch('http://localhost:8000/tanulok')
    //   .then(res=>res.json())
    //   .then(tanulok=>{setTanulok(tanulok); setIsLoading(false);})
    //   .catch(err=>console.log(err));

    // },[refresh])

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Tanulóink:</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        isLoading ? 
        <>
          <h1 className="text-xl font-bold text-center">Loading...</h1>
        </>:
        <>
        {
         tanulok.map((tanulo,i)=>(<Tanulo key={i} tanulo={tanulo} update={update} />))
        }
        </>
      }
      </div>
    </div>
  )
}

export default Tanulok