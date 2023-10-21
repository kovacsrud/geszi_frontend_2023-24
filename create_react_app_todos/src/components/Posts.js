import { useState,useEffect } from "react"

function Posts() {
    const[posts,setPosts]=useState([]);

    const getPosts=async ()=>{
        try {
            const keres=await fetch("https://jsonplaceholder.typicode.com/posts");
            const valasz=await keres.json();
            setPosts(valasz);
        } catch (error) {
            console.log(error);
        }
        
    }


    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/posts")
        //.then(res=>res.json())
        //.then(adat=>setPosts(adat))
        //.catch(err=>console.log(err))
        getPosts();
    },[]);

  return (
    <div>
        <h2>Posztok:</h2>
        {
            <>
            <p>Lista hossza:{posts.length}</p>
                {
                   posts.map((elem)=>(<p key={elem.id}>{elem.title}</p>))
                }
            
            </>
        }
    </div>
  )
}

export default Posts