import { useState,useEffect } from "react";
import Kategoria from "./Kategoria";

function Kategoriak() {

  const[kategoriak,setKategoriak]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/genres")
    .then(res=>res.json())
    .then(kategoriak=>setKategoriak(kategoriak))
    .catch(err=>alert(err));
  },[])

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Kategóriák</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">

      {
        kategoriak.map((kategoria,i)=>(<Kategoria key={i} kategoria={kategoria} />))
      }

      </div>

    </div>
  )
}

export default Kategoriak