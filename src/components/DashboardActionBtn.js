import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActionBtn = (props) => {
  return (
    <Link to={props.url} className=' flex space-x-4 rounded-lg border border-pri-pink text-black p-6 items-center transition-all hover:bg-black hover:text-white'>
        <p>{props.name}</p>
        <div>
            <img src={props.icon} alt={props.name}/>
        </div>
    </Link>
  )
}

export default DashboardActionBtn;
