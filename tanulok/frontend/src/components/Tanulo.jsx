import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TanuloContext from "../context/TanuloContext";

function Tanulo({ tanulo, update }) {
  const { modosit, torles } = useContext(TanuloContext);

  // const modosit=()=>{
  //   navigate('/ujtanulo',{state:{tanulo}});
  // }
  // const torles=(id)=>{
  //   fetch(`http://localhost:8000/tanulok/${id}`,{
  //     method:"DELETE",
  //     headers:{"Content-type":"application/json"}
  //   })
  //   .then(res=>res.text())
  //   .then(res=>{alert(res);update()})
  //   .catch(err=>console.log(err))

  // }
  return (
    <div className="card my-5 w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">
          {tanulo.vezeteknev} {tanulo.keresztnev}
        </h2>
        <p>Kor: {tanulo.kor}</p>
        <p>Születési hely: {tanulo.szuletesi_hely}</p>
        <p>E-mail-cím:{tanulo.email}</p>
        <div className="card-actions justify-end">
          <button onClick={() => document.getElementById(`modosit${tanulo.id}`).showModal()} className="btn">
            Módosítás
          </button>
          <button onClick={() => document.getElementById(`torol${tanulo.id}`).showModal()} className="btn">
            Törlés
          </button>
        </div>
      </div>
      <dialog id={`modosit${tanulo.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Módosítás</h3>
          <p className="py-4 text-black">
            Biztosan módosítja {tanulo.vezeteknev} {tanulo.keresztnev} adatait?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => modosit(tanulo)} className="btn">Ok</button>
              <button className="btn">Mégsem</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id={`torol${tanulo.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Törlés</h3>
          <p className="py-4 text-black">
            Biztosan törli {tanulo.vezeteknev} {tanulo.keresztnev} adatait?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() =>torles(tanulo.id)} className="btn">Ok</button>
              <button className="btn">Mégsem</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Tanulo;
