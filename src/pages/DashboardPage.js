import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';

const DashboardPage = () => {
  
  return (
    <div className=' block md:flex'>
      <SideBar/>
      <div className=' h-screen md:overflow-y-scroll md:w-4/5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardPage
