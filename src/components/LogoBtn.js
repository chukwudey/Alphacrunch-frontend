import React from 'react';
import logo_white from '../assets/logo_white.svg';
import logo_gold from '../assets/logo_gold.svg';
import { Link } from 'react-router-dom';
import { product_name } from '../constants/details';

const LogoBtn = () => {
  return (
    <Link to='/'>
      <div className='hidden md:block absolute top-6 left-4 w-16 ease-in-out mx-auto'>
          <img src={logo_white} alt={`${product_name} logo`} className=' w-full'  />
        </div>
        <div className='block md:hidden absolute top-6 left-4 w-16 ease-in-out mx-auto'>
          <img src={logo_gold} alt={`${product_name} logo`} className=' w-full' />
        </div>
    </Link>
  )
}

export default LogoBtn
