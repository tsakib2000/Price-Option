import { useState } from "react";
import Link from "../Link/Link";
import { FaBars,FaWindowClose } from "react-icons/fa";

const CustomNav = () => {
 const routes =   [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Services", "path": "/services" },
        { "id": 4, "name": "Dashboard", "path": "/dashboard" },
        { "id": 5, "name": "Profile", "path": "/profile" }
      ]
      const [open,setOpen]=useState(false)
      
    return (
        <nav className="text-black p-6">
          <div className='md:hidden'  onClick={()=>setOpen(!open)} >
            {
                open ? <FaWindowClose className="text-3xl"/>:<FaBars className="text-3xl" />
            }
          
          </div>
           <ul className={`md:flex absolute md:static z-10 p-6 bg-lime-300 px-6 shadow-lg duration-300 rounded-xl ${open?'top-16':'-top-60'}`}>
           {
                routes.map(route=> <Link key={route.id} route={route}> </Link>)
            }
           </ul>


        </nav>
    );
};

export default CustomNav;