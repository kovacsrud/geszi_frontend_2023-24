

function Character({ character }) {
    return (
        <div>
            <div className="w-96 card card-side bg-blue-400 shadow-xl m-5">
                <figure><img className="" src={character.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <p>Státusz:{character.status}</p>
                    <p>Faj:{character.species}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Character