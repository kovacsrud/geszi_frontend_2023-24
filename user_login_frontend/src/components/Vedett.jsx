import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import {toast} from 'react-toastify';

function Vedett() {
    const [vedettAdat,setVedettAdat]=useState(null);
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');
    //const token="$ggret564677";

    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(!data.message){
                    setVedettAdat(data)
                } else {
                    toast.error(data.message)
                }
            })
            .catch(err=>toast.error(err));

        } else {
            navigate('/login');
        }
    },[])

  return (
    <div>
        <h2>Védett infók</h2>
        <p>{vedettAdat}</p>
    </div>
  )
}

export default Vedett