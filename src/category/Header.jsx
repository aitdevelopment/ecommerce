import React, { useState } from 'react'
import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

const [show, setshow] = useState(true)

const searchHandle = ()=>{
    setshow((!show))
}




    return (
        <header className=' w-full px-4 py-4 bg-primary flex items-center justify-between '>

            <div className="  ">
                <Link className='text-xl text-textColor font-semibold uppercase ' to={"/"}> Legend  </Link>
            </div>
            <nav className=' '>
                <ul className=' flex items-center justify-center gap-4 text-textColor text-lg font-semibold '>
             
                    <li> <NavLink  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                    <li> <NavLink  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                    <li> <NavLink  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                    <li> <NavLink  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                    <li> <NavLink  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                    <li> <NavLink  className={({ isPending }) =>
    isPending ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  } > Home </NavLink> </li>
                   


              


                    {/* <li> <NavLink > Shop-online  </NavLink> </li>
                    <li> <NavLink > About </NavLink> </li>
                    <li> <NavLink > Produce </NavLink> </li>
                    <li> <NavLink > Visit </NavLink> </li>
                    <li> <NavLink > Join-Our_CSA </NavLink> </li> */}


                </ul>
            </nav>

            <div className='flex items-center justify-center gap-2'>
                <div>
                    <button onClick={searchHandle} > {show ? <FaSearch /> : <FaXmark/> } </button>
                  {
                    show ?  "" : <input type="search" name="" id="" />
                  }
                </div>
                <div>
                    <Link to={"/"}> <FaUser /> </Link>
                </div>
                <div>
                    <Link to="/wishlist"><FaHeart /> </Link>
                </div>
                <div>
                    <Link to={"/"}><FaShoppingCart /> </Link>
                </div>



            </div>

            <div className='hidden'>
                <button><FaBars /> </button>
            </div>




        </header>
    )
}

export default Header