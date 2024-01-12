

function Cocktail({ cocktail }) {
    return (
        <div>
            <a className="m-5 p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href="#">
                <img src={cocktail.strDrinkThumb} className="shadow rounded-lg overflow-hidden border" />
                    <div className="mt-8">
                        <h4 className="font-bold text-xl">{cocktail.strDrink}</h4>
                        <p className="mt-2 text-gray-600">{cocktail.strGlass}
                        </p>
                        
                    </div>
            </a>
        </div>
    )
}

export default Cocktail