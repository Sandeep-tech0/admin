import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />
      },
      {
        title: 'User',
        path: '/user',
        icon: <IoIcons.IoMdPeople />
      },

  {
    title: 'Role',
    path: '/role',
    icon: <IoIcons.IoIosPaper />,
  },
  
  {
    title: 'Products Category',
    path: '/category',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Product SubCategory',
    path: '/subcategory',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Retailer',
    path: '/retailer',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Offer',
    path: '/offer',
    icon: <MdLocalOffer/>
  },
  {
    title: 'Third Party',
    path: '/thirdparty',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'login',
    path: '/login',
    icon: <IoIcons.IoMdPeople />
  },
 
 
];