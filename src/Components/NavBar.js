import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { NavBarData } from './NavBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import Vancitylogo from './Vancitylogo.png'


function NavBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
                <IconContext.Provider value={{color: '#E83131'}}> 
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    
                    <div className="logo">
                        <img className="logoImg" alt="vancitylogo" src={Vancitylogo}/>
                    </div>
                    
                    <table className="accIconContainer">
                        <tr>
                            <td> <AiIcons.AiOutlinePlus className="accIcons" /> </td>
                            <td> <CgIcons.CgProfile className="accIcons" /> </td>
                        </tr>

                    </table>
                

                </div>
                </IconContext.Provider>

                <IconContext.Provider value={{color: '#fff'}}> 
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {NavBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span> 
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                </IconContext.Provider>
        </>
    
    )
};

export default NavBar;