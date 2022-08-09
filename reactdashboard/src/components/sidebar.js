import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import { Sidebardata } from './sidebardata';
import './sidebar.css';
import {IconContext} from 'react-icons';


function Sidebar() {

    const [sidebar1,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar1);

  return (
    <>
    <IconContext.Provider value={{color:'red'}} />
    <div className='navbar'>
        <nav>   
            <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </nav>
    </div>

    <nav className={sidebar1 ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link className='menu-bars'>
                <AiIcons.AiOutlineClose />
                </Link>
            </li>
            {Sidebardata.map((item,index)=>{
                return(
                    <li key={index} className={item.cname}>
                        <Link to={item.path}>
                            {item.icons}
                            <span>
                                {item.title}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </>
  )
}

export default Sidebar