"use client"

import React from 'react'
import { Menu } from 'lucide-react';
import { setIsSidebarCollapsed } from '@/state';
import { useAppSelector } from '@/app/redux';
import { useDispatch } from 'react-redux';



const Sidebar = () => {

    const dispatch = useDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);    
    const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed)); 
    };

    const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? 'w-0 md:-w-16' : 'w-72 : md: w-64'
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;  



  return (
    <div className={sidebarClassNames}>
    <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
      <div>
Logo
      </div>
      <h1 className='fnnt-extrabold text-2xl'>
        STOCKS
      </h1>
    <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
    onClick={toggleSidebar} 
    >
      <Menu  className='w-4 h-4'/>
    
    </button>
    </div>

    {/* LINKS */}  
    <div className='flex-grow mt-8'>
      {/* LINK HERE*/}  

    </div>
    <div>
      <p className='text-center text-xs text-gray-500'>
        &copy; 2024 Stocks  

      </p>
    </div>

    </div>

  )
}

export default Sidebar;