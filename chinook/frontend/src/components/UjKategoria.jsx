import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjKategoria() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const kuldes = () => {
    fetch("http://localhost:8000/genres",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({name:name})
    })
    .then(res=>res.json())
    .then(valasz=>{alert(valasz.message);navigate('/')})
    .catch(err=>alert(err));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    kuldes();
  }

  
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Új kategória rögzítése</h2>
      <form onSubmit={onSubmit}>
        <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">

          <div className="mb-6">
            <label for="name" className="block text-gray-800 font-bold">Új kategória:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
          </div>
          
          <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Küldés</button>

        </div>

      </form>
    </div>
  )
}

export default UjKategoria