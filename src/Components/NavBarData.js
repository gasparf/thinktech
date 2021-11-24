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
        title: 'Accounts',
        path: '/accounts',
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },

    {
        title: 'Transactions',
        path: '/transactions',
        icon: <AiIcons.AiOutlineCreditCard />,
        cName: "nav-text"
    },

    {
        title: 'Investments',
        path: '/invesetments',
        icon: <AiIcons.AiOutlineBarChart/>,
        cName: "nav-text"
    },

    {
        title: 'Borrowing',
        path: '/borrowing',
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },

    {
        title: 'Help',
        path: '/help',
        icon: <AiIcons.AiFillQuestionCircle />,
        cName: "nav-text"
    },

    {
        title: 'LogOut',
        path: '/logout',
        icon: <IoIcons.IoIosExit/>,
        cName: "nav-text"
    },

];