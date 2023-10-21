import { useState,useEffect } from "react";
import User from "./User";

function Users() {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=50")
        .then(res=>res.json())
        .then(users=>setUsers(users.results))
        .catch(err=>console.log(err));
    },[])
  return (
    <div>
        <h1>Felhasználók száma:{users.length}</h1>
        {
            users.map((user,i)=>(<User key={i} user={user} />))
        }

    </div>
  )
}

export default Users