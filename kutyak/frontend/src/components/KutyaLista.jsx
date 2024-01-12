import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";

function KutyaLista() {
  const{kutyak,modositas}=useContext(KutyaContext);
  return (
    <div>
      {
        kutyak.map((kutya,i)=>
        (
          <div key={i}>
           <p>{kutya.kutyanev},{kutya.nev},{kutya.eletkor},{kutya.utolsoell}</p>
           <button  className="btn btn-primary" onClick={()=>modositas(kutya)}>Módosítás</button>
         </div>
        ))
      }
    </div>
  )
}

export default KutyaLista