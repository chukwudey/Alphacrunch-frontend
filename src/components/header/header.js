import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkStyle } from '../../constants/styles';
import { product_name } from '../../constants/names';

const Header = () => {

    const linkStyleActive = `
        text-yellow-600 
        cursor-pointer 
        border-b-4
        border-solid 
        border-yellow-600 
        transition-all 
        ease-in-out`;

    return (
        <div className='flex justify-between align-middle bg-pri-pink px-20 p-4 font-Space-Grotesk'>
            <div className="text-black font-extrabold text-xl hover:text-yellow-600 transition-all ease-in cursor-pointer">
                {product_name}
            </div>
            <div className=' hidden md:flex font-semibold justify-evenly space-x-6'>
                <NavLink className={linkStyle} to='/signup' activeClassName={linkStyleActive}>
                    <p>CryptoCurrency</p>
                </NavLink>
                <NavLink className={linkStyle} to='' activeClassName={linkStyleActive}>
                    <p>Giftcarts</p>
                </NavLink>
                <NavLink className={linkStyle} to='' activeClassName={linkStyleActive}>
                    <p>Rates</p>
                </NavLink>
                <NavLink className={linkStyle} to='' activeClassName={linkStyleActive}>
                    <p>About Us</p>
                </NavLink>
            </div>
            <div className=' flex-col md:hidden justify-evenly space-x-4'>
                <p className={linkStyle}>CryptoCurrency</p>
                <p className={linkStyle}>Giftcarts</p>
                <p className={linkStyle}>Rates</p>
                <p className={linkStyle}>About Us</p>
            </div>
            <div className='hidden md:flex space-x-2'>
                <button className=' border-solid border border-black rounded-md hover:bg-black hover:text-white py-1 px-7' type="button">Signin</button> 
                <button className='  rounded-md bg-black hover:bg-white hover:text-black text-white py-1 px-8' type="button">Create Account</button> 
            </div>
        </div>
    );
}

export default Header;
