import { useContext,useState } from "react"
import KutyaContext from "../context/KutyaContext"
import { useLocation,useNavigate } from "react-router-dom"

function KutyaForm() {
  const{kutyanevek,kutyafajtak,backendMuvelet}=useContext(KutyaContext);
  let cim="Új rendelési adat";
  const navigate=useNavigate();
  const {state}=useLocation();
  let method="POST";
  let formObj={};
  let url="http://localhost:8000/kutyak";

  if(state!==null){
    const {kutya}=state;
    cim="Rendelési adat módosítása";
    method="PATCH";
    
     formObj={
       Id:kutya.Id,
       nevid:kutya.nevid,
       fajtaid:kutya.fajtaid,
       eletkor:kutya.eletkor,
       utolsoell:kutya.utolsoell
     }
    
  } else {
    formObj={
      nevid:1,
      fajtaid:1,
      eletkor:"",
      utolsoell:""
    }
  }

  const[formData,setFormData]=useState(formObj);

  
  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    backendMuvelet(formData,method,url);
    navigate('/kutyalista');
  }

  return (
    <div>
      <h1 className="text-2xl text-center">{cim}</h1>
      <form onSubmit={onSubmit}>
      <div>
      <input type="text" id="eletkor" onChange={writeData} required value={formData.eletkor} placeholder="A kutya kora" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="utolsoell" onChange={writeData} required value={formData.utolsoell} placeholder="Utolsó ellenőrzés" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
        
        <select  className="select select-bordered" value={formData.fajtaid} onChange={writeData}  id="fajtaid">
          {
            kutyafajtak.map((kutyafajta)=>(<option key={kutyafajta.Id} value={kutyafajta.Id}>{kutyafajta.nev}</option>))  
          }
        </select>
      </div>
      <div>
      
      <select id="nevid" value={formData.nevid} onChange={writeData} className="select select-bordered">
          {
            kutyanevek.map((kutyanev)=>(<option key={kutyanev.Id} value={kutyanev.Id}>{kutyanev.kutyanev}</option>))  
          }
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Küldés</button>

      </form>
    </div>
  )
}

export default KutyaForm