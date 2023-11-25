import { useState,useEffect,createContext } from "react";
import { useNavigate } from "react-router-dom";

const TanuloContext=createContext();

export const TanuloProvider=({children})=>{
    const[tanulok,setTanulok]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:8000/tanulok')
        .then(res=>res.json())
        .then(tanulok=>{setTanulok(tanulok);console.log(tanulok); setIsLoading(false);})
        .catch(err=>console.log(err));
  
      },[refresh])


    return <TanuloContext.Provider value={{tanulok,isLoading,update}}>{children}</TanuloContext.Provider>
}

export default TanuloContext;