import { useState,useEffect } from "react";
import Todo from "./Todo";

function Todos() {
    const[todos,setTodos]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(adat=>setTodos(adat))
        .catch(err=>console.log(err));
    },[]);

  return (
    <div>
        <h2>Tennivalók:</h2>
        {
            todos.map((todo)=>(<Todo key={todo.id} todo={todo}/>))
            //todos.map((todo)=>(<div>
                //{
                //    todo.completed ?
                //     <p className="athuzott">{todo.title}</p>
                //      :
                //     <p>{todo.title}</p>
                //}
            //</div>))
        }
    </div>
  )
}

export default Todos