import {useState} from 'react';

function Lista() {
    //komponens logika
    const[nevek,setNevek]=useState(["Éva","Ágnes","Ubul","Zénó"]);

    const klikk=()=>{
        alert("React app");
    }


 //sablon rész   
  return (
    
    <div>
        <ul>
        {
            nevek.map((elem,i)=>(<li key={i} onClick={klikk}>{elem}</li>))
        }
        </ul>
    </div>
  )
}

export default Lista;