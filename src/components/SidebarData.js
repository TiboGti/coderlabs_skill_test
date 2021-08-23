import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons  from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsPaperclip/>,
    cName: 'nav-text'
  },
  {
    title: 'Ryck and Morty',
    path: '/pages/cards',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Form',
    path: '/pages/page',
    icon: <BsIcons.BsPaperclip/>,
    cName: 'nav-text'
  },
  
  {
    title: 'Page 1',
    path: '/page/page1',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Cards',
    path: '/pages/ca',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];