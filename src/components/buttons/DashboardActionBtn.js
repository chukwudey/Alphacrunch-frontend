import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActionBtn = (props) => {
  return (
    <Link to={props.url} className=' flex justify-between w-48 md:w-1/5 space-x-2 rounded-lg border border-pri-pink text-black p-4 items-center transition-all hover:bg-black hover:text-white'>
        <p className=' md:w-4/5 text-2xs font-bold font-inter '>{props.name}</p>
        <div className=' md:w-1/5'>
            <img src={props.icon} alt={props.name}/>
        </div>
    </Link>
  )
}

export default DashboardActionBtn;
