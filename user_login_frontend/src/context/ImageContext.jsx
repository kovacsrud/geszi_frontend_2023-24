import {createContext,useContext} from 'react';
import UserContext from './UserContext';
import {toast} from 'react-toastify';

const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const {update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');

    const imgDelete=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`,
                
            },
            body:JSON.stringify({"imageId":imageId})
        })
        .then(res=>res.json())
        .then(valasz=>{toast.success(valasz.message);update()})
        .catch(err=>toast.error(err))
    }


    return <ImageContext.Provider value={{imgDelete}}>{children}</ImageContext.Provider>
}



export default ImageContext;
