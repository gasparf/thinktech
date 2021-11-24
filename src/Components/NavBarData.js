import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },

    {
        title: 'Random',
        path: '/random',
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },

    {
        title: 'Borrowing',
        path: '/borrowing',
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },

];