import { useState,useEffect,createContext } from "react";
import {useNavigate} from 'react-router-dom';

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    const[kutyak,setKutyak]=useState([]);
    const[kutyanevek,setKutyanevek]=useState([]);
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8000/kutyak')
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/kutyanevek')
        .then(res=>res.json())
        .then(adat=>setKutyanevek(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const backendMuvelet=async (adat,method,url)=>{
        const response=await fetch(url,{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        })

        const valasz=await response.text();
        update();
        alert(valasz);
    }

    const torles=(kutya,url)=>{
        backendMuvelet(kutya,"DELETE",url)
    }

    const modositas=(kutya)=>{
        navigate("/kutyaform",{state:{kutya}});
    }




    return <KutyaContext.Provider 
    value={{
        kutyak,
        kutyanevek,
        kutyafajtak,
        update,
        backendMuvelet,
        torles,
        modositas

    }}>{children}</KutyaContext.Provider>
}


export default KutyaContext;