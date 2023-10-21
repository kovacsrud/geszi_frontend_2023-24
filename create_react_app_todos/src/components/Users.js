import { useState,useEffect } from "react"

function Users() {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(adat=>setUsers(adat))
        .catch(err=>console.log(err));

    },[])
  return (
    <div>
        <h2>Felhasználók:</h2>
        {
            users.map((elem)=>(<p key={elem.id}>{elem.name},City:{elem.address.city},Street:{elem.address.street}</p>))
        }
    </div>
  )
}

export default Users