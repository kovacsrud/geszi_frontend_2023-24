import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import Cocktail from "./Cocktail";

function Cocktails() {
    const{cocktails,firstLetter,setFirstLetter,kereses}=useContext(CocktailContext);
  return (
    <div>
        <h3 className="text-2xl font-bold text-center">Keresés kezdőbetű szerint</h3>
        <div className="flex items-center justify-center">
            <div className="flex-column my-10">
                <div>
                <input type="text" value={firstLetter} onChange={(e)=>setFirstLetter(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="text-center">
                <button onClick={()=>kereses()} className="btn btn-primary my-5">Keresés</button>
                </div>
                
            </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center">
            {
                (cocktails && cocktails.length>0) ? 
                <>
                {
                    cocktails.map((cocktail,i)=>(<Cocktail key={i} cocktail={cocktail} />))
                }
                    <p className="text-center">Találatok száma:{cocktails.length}</p>
                </>
                :
                <>
                    <p className="text-center">Nincs ilyen betűvel keződődő nevű koktél.</p>
                </>

            }

        </div>
    </div>
  )
}

export default Cocktails