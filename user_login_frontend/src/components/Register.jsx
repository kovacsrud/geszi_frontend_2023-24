import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Register() {
  const navigate=useNavigate();


  const kuldes=(formData,method)=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/register`,{
      method:method,
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(token=>{
      if(!token.message){
        sessionStorage.setItem('usertoken',token);
        toast.success("Sikeres regisztráció!");
        navigate('/');
      } else {
        toast.error(token.message);
      }
    })
    .catch(err=>toast.error(err));
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    kuldes(formData,'POST');

  }
  let formObj={
    username:"",
    email:"",
    age:"",
    password:"",
    passwordAgain:""
  }

  const [formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
  }


  return (
    <div className="flex justify-center">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold pb-5">Belépés</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label for="username" className="block mb-2 text-sm font-medium">Felhasználói név</label>
            <input
              type="text"
              id="username"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Felhasználói név"
              required
              onChange={writeData}
              value={formData.username}
            />
          </div>
          <div className="mb-4">
            <label for="username" className="block mb-2 text-sm font-medium">Email cím</label>
            <input
              type="text"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="E-mail cím"
              required
              onChange={writeData}
              value={formData.email}
            />
          </div>
          <div className="mb-4">
            <label for="username" className="block mb-2 text-sm font-medium">Életkor</label>
            <input
              type="text"
              id="age"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Életkor"
              required
              onChange={writeData}
              value={formData.age}
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block mb-2 text-sm font-medium">Jelszó</label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              onChange={writeData}
              value={formData.password}
            />
          </div>
          <div className="mb-4">
            <label for="passwordAgain" className="block mb-2 text-sm font-medium">Jelszó ismét</label>
            <input
              type="password"
              id="passwordAgain"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              onChange={writeData}
              value={formData.passwordAgain}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Küldés
            </button>
            <div className="flex items-center text-sm">

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register