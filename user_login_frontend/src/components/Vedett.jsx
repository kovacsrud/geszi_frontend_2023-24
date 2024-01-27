import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import {toast} from 'react-toastify';

function Vedett() {
    const [vedettAdat,setVedettAdat]=useState({});
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        if(token){
            fetch('http://localhost:8000/api/user/vedett',{
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
    <div>Vedett</div>
  )
}

export default Vedett