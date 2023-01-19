import React from 'react';
import { product_name } from '../../constants/details';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { BiMessageAltDetail, BiTransferAlt } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import LogoBtn from '../LogoBtn';

const SideBar = () => {
    const navLinkStyleDefault = ' flex md:w-full group-hover:block font-inter rounded-md p-2 hover:bg-pri-pink-light hover:text-black transition-all  justify-between group items-center md:space-x-20 mb-4 ';
    const navLabelStyle = ' md:block hidden';
  return (
    <div className=' bg-pri-pink w-1/5 h-screen pl-4'>
        <Link to='/'><h2 className=' hidden lg:block mt-4 text-4xl text-center font-bold font-Space-Grotesk mb-28'>{product_name}</h2></Link>
        <div className=' block lg:hidden mt-4 text-center w-3/5 mb-28'>
            <LogoBtn/>
        </div>
        <div>
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black  text-white'  : navLinkStyleDefault + ' text-black'} to='overview'>
                <div className=' flex justify-start items-center space-x-6'>
                    <AiOutlineHome />
                    <p className={navLabelStyle}>Dashboard</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='wallet'>
                <div className=' flex justify-start items-center space-x-6'>
                    <MdOutlineAccountBalanceWallet/>
                    <p className={navLabelStyle}>Wallet</p>
                </div>
                <div className='opacity-0 transition-all group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>

            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='profile'>
                <div className=' flex justify-start items-center space-x-6'>
                    <HiOutlineUserCircle/>
                    <p className={navLabelStyle}>Profile</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>  
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='sell-btc'>
                <div className=' flex justify-start items-center space-x-6'>
                    <AiOutlineHome/>
                    <p className={navLabelStyle}>SellBTC</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='giftcards'>
                <div className=' flex justify-start items-center space-x-6'>
                    <BsCreditCard2Front/>
                    <p className={navLabelStyle}>GiftCards</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='transactions'>
                <div className=' flex justify-start items-center space-x-6'>
                    <BiTransferAlt/>
                    <p className={navLabelStyle}>Transactions</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>  
            <NavLink exact='true' className={({isActive}) => isActive?  navLinkStyleDefault + ' bg-black text-white'  : navLinkStyleDefault + ' text-black'} to='messages'>
                <div className=' flex justify-start items-center space-x-6'>
                    <BiMessageAltDetail/>
                    <p className={navLabelStyle}>Messages</p>
                </div>
                <div className='opacity-0 group-hover:opacity-100'>
                    <IoMdArrowDropright/>
                </div>
            </NavLink>
        </div>
            
    </div>
        
  )
}

export default SideBar;
