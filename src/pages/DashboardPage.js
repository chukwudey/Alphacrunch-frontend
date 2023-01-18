import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';

const DashboardPage = () => {
  
  return (
    <div className=' flex'>
      <SideBar/>
      <div className=' h-screen overflow-y-scroll w-4/5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardPage
