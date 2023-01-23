import React,{useState} from 'react';
import { product_name } from '../../constants/details';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsCreditCard2Front, BsBoxArrowInRight } from 'react-icons/bs';
import { BiMessageAltDetail, BiTransferAlt } from 'react-icons/bi';
import { Link, NavLink , useNavigate} from 'react-router-dom';

const SideBar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const navLinkStyleDefault = ' flex  group-hover:block font-inter rounded-md p-2 hover:bg-pri-pink-light hover:text-black transition-all  justify-between group items-center md:space-x-20 mb-4 ';
    const navLabelStyle = ' md:block';

    const logOut = ()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
  return (
    <div className=' bg-pri-pink  md:h-screen md:pl-4 px-4 pb-2 flex items-center md:flex-col justify-between'>
        <Link to='/'><h2 className=' block mt-4 text-lg md:text-3xl text-center font-bold font-Space-Grotesk md:mb-12'>{product_name}</h2></Link>
       <div className=' relative'>
            <p className=' cursor-pointer hover:bg-yellow-700 hover:text-white px-2 py-1 text-xl font-bold md:hidden block rounded-md' onClick={()=>setShow(!show)} >{show? <>&#9932;</>: <>&#9778;</>}</p>
            <nav className={`${show? 'flex' : 'hidden' } md:flex flex-col md:space-y-12 mx-auto z-50 absolute md:static right-full  p-4 md:p-0`}>
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
                <div>
                    <div onClick={()=> logOut()} className=' flex justify-start items-center p-2 space-x-6 hover:bg-black hover:text-white cursor-pointer rounded-md'>
                        <BsBoxArrowInRight/>
                        <p className={navLabelStyle}>Log Out</p>
                    </div>
                </div>
            </nav>
       </div>
            
    </div>
        
  )
}

export default SideBar;
