import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';

const DashboardPage = () => {
  
  return (
    <div className=' block lg:flex'>
      <SideBar/>
      <div className=' h-screen lg:overflow-y-scroll lg:w-4/5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardPage
