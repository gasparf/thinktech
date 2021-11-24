import React from "react";
import * as FaIcons from 'react-ions/fa';
import { Link } from 'react-router-dom';



function sideBar() {
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        
        
        </>
    )
};

export default sideBar;