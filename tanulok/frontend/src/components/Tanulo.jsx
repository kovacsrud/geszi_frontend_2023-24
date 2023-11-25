import { useNavigate } from "react-router-dom";

function Tanulo({ tanulo,update }) {
  const navigate=useNavigate();

  const modosit=()=>{
    navigate('/ujtanulo',{state:{tanulo}});
  }
  const torles=(id)=>{
    fetch(`http://localhost:8000/tanulok/${id}`,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}
    })
    .then(res=>res.text())
    .then(res=>{alert(res);update()})
    .catch(err=>console.log(err))

  }
  return (
    <div className="card my-5 w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{tanulo.vezeteknev} {tanulo.keresztnev}</h2>
        <p>Kor: {tanulo.kor}</p>
        <p>Születési hely: {tanulo.szuletesi_hely}</p>
        <p>E-mail-cím:{tanulo.email}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>modosit()} className="btn">Módosítás</button>
          <button onClick={()=>torles(tanulo.id)} className="btn">Törlés</button>
        </div>
      </div>
    </div>
  )
}

export default Tanulo