import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Image from './Image';
import UserContext from '../context/UserContext';

function Images() {
    const [images,setImages]=useState({});
    const token=sessionStorage.getItem('usertoken');
    const navigate=useNavigate();
    const {refresh}=useContext(UserContext);

    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(images=>setImages(images))
            .catch(err=>toast.error(err));

        } else  {
           navigate('/login');
        }
    },[refresh])


  return (
    <div>
        <h2 className='text-2xl text-center font-bold'>Feltöltött képek</h2>
        {
            token && images.images!=null && images.images.length>0 
            ?
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                    images.images.map((image,i)=>(
                        <Image key={i} path={images.path} image={image} />
                    ))
            }
            </div>
                
            </>
            :
            <>
                <h2 className='text-2xl text-center font-bold'>Nincsenek feltöltött képek!</h2>
            </>
        }
    </div>
  )
}

export default Images