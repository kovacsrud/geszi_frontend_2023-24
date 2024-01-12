import { useState,createContext } from "react";

const CocktailContext=createContext();

export const CocktailProvider=({children})=>{
    const[cocktails,setCocktails]=useState([]);
    const[firstLetter,setFirstLetter]=useState("");

    const kereses=()=>{
        if(firstLetter!=""){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
            .then(res=>res.json())
            .then(cocktails=>setCocktails(cocktails.drinks))
            .catch(err=>console.log(err));
        }

    }
    return <CocktailContext.Provider value={{
        cocktails,
        firstLetter,
        setFirstLetter,
        kereses

    }}>{children}</CocktailContext.Provider>
}


export default CocktailContext;