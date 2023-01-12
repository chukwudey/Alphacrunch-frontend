import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { linkStyle } from '../../constants/styles';
import { product_name } from '../../constants/details';
import { interlinks } from '../../constants/links';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex justify-between items-center bg-pri-pink px-5 md:px-20 p-4 font-Space-Grotesk'>
            <div className="text-black font-extrabold text-xl hover:text-yellow-600 transition-all ease-in cursor-pointer">
                {product_name}
            </div>
            <nav className=' hidden md:flex md:items-baseline font-semibold justify-evenly space-x-6'>
                <NavLink className={linkStyle} to=''>
                    <p>CryptoCurrency</p>
                </NavLink>
                <NavLink className={linkStyle} to=''>
                    <p>Giftcards</p>
                </NavLink>
                <NavLink className={linkStyle} to=''>
                    <p>Rates</p>
                </NavLink>
                <NavLink className={linkStyle} to=''>
                    <p>About Us</p>
                </NavLink>
            </nav>
            <div className=' relative block md:hidden'>
                <p className=' cursor-pointer hover:bg-yellow-700 hover:text-white px-2 py-1 text-4xl font-bold md:hidden block rounded-md' onClick={()=>setShow(!show)} >{show? <>&#9932;</>: <>&#9778;</>}</p>
                <nav className={`${show? 'flex': 'hidden'} flex-col gap-8 md:hidden justify-start items-start absolute right-full bg-pri-pink p-4 w-full text-left z-10 shadow-md rounded-md`}>
                    <p className={linkStyle}>CryptoCurrency</p>
                    <p className={linkStyle}>Giftcards</p>
                    <p className={linkStyle}>Rates</p>
                    <p className={linkStyle}>About Us</p>
                </nav>
            </div>
            
            <div className='hidden md:flex space-x-4 font-Space-Grotesk'>
                <Link to={interlinks.signin_link}>
                    <button className=' border-solid border border-black rounded-md hover:bg-black hover:text-white py-2 px-7' type="button">Sign In</button> 
                </Link>
                
                <Link to={interlinks.signup_link}>
                    <button className='  rounded-md bg-black hover:bg-white hover:text-black text-white py-2 border border-black px-8' type="button">Create Account</button> 
                </Link>
                
            </div>
        </div>
    );
}

export default Header;
