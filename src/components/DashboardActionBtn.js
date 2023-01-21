import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActionBtn = (props) => {
  return (
    <Link to={props.url} className=' flex w-1/3 space-x-4 text-sm rounded-lg border border-pri-pink text-black p-4 items-center transition-all hover:bg-black hover:text-white'>
        <p className=' w-2/3'>{props.name}</p>
        <div className=' w-1/3'>
            <img src={props.icon} alt={props.name}/>
        </div>
    </Link>
  )
}

export default DashboardActionBtn;
