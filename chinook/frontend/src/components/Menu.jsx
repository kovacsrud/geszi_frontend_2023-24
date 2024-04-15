import {Link} from 'react-router-dom';

function Menu() {
  return (

    <nav className="my-5 bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <Link to={"/"} className="font-bold text-xl tracking-tight">Főoldal</Link>
      <div className="flex items-center">
        <Link to={"/eloadok"} className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" >Előadók</Link>
        <Link to={"/kategoriak"} className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" >Kategóriák</Link>
        <Link to={"/ujkategoria"} className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" >Új kategória</Link>
      </div>
    </nav>


  )
}

export default Menu