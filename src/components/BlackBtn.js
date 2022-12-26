import React from 'react';
import { Link } from 'react-router-dom';

const BlackBtn = (props) => {
    const {url, text} = props;
  return (
    <div>
        <Link  to={url}>
            <p className=' w-max bg-black text-white hover:text-black hover:bg-white hover:border-black border-2 border-transparent px-14 py-4 rounded-2xl'>{text}</p>
        </Link>
    </div>
  )
}

export default BlackBtn
