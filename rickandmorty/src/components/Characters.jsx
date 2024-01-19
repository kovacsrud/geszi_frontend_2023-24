import { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(err => console.log(err))
    }, [page]);

    const elore = () => {
        if (page < info.pages) {
            setPage(prev => prev + 1);
        }
    }

    const vissza = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }

    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-10">Szereplők</h1>

            <div className="join grid grid-cols-3 justify-items-stretch">
                
                <div className="justify-self-end">
                <button onClick={()=>vissza()} className="join-item btn btn-outline">Előző</button>
                </div>
                <div className="justify-self-center">
                <button className="join-item btn btn-outline">{page}</button>
                </div>
                <div className="justify-self-start">
                <button onClick={()=>elore()} className="join-item btn btn-outline">Következő</button>
                </div>                                
                
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
                {
                    characters.map((character, index) => (<Character key={index} character={character} />))
                }

            </div>
            <div className="join grid grid-cols-3 justify-items-stretch">
                
                <div className="justify-self-end">
                <button onClick={()=>vissza()} className="join-item btn btn-outline">Előző</button>
                </div>
                <div className="justify-self-center">
                <button className="join-item btn btn-outline">{page}</button>
                </div>
                <div className="justify-self-start">
                <button onClick={()=>elore()} className="join-item btn btn-outline">Következő</button>
                </div>                                
                
            </div>

        </div>
    )
}

export default Characters