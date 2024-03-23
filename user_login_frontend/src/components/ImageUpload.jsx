import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import UserContext from '../context/UserContext';

function ImageUpload() {
    const navigate=useNavigate();
    const {update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');
    const [images,setImages]=useState([]);

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
    },[token]);

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i]);
        }
        kuldes(formData);
        update();
        navigate('/images');
    }

    const kuldes=(adat)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/files/upload`,{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:adat
        })
        .then(res=>res.json())
        .then(valasz=>{toast.success(valasz.message);update()})
        .catch(err=>toast.error(err));
    }


    const imageChange=(e)=>{
        setImages([...images,...e.target.files]);
    }

  return (
    <div>
        <h2 className='text-2xl text-center font-bold'>Képek feltöltése</h2>
        <div className='flex justify-center items-center'>
            <div className='flex-column m-10'>
                <form onSubmit={onSubmit}>
                    <input onChange={imageChange} className='file-input file-input-bordered w-full max-w-xs' type='file' multiple required/>
                    <div>
                         <button type='submit' className='btn btn-primary m-10'>Feltöltés</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default ImageUpload