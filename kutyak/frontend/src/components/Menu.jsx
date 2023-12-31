import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="relative inline-block text-left">
    <div className="group">
        <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Menü
           
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

       
        <div
            className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
                <Link to={'/kutyanevek'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kutyanevek</Link>
                <Link to={'/kutyafajtak'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kutyafajták</Link>
                <Link to={'/kutyalista'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rendelési adatok</Link>
                <Link to={'/kutyaform'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Új rendelési adat</Link>
                <Link to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Főoldal</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Menu