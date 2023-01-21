import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {ReactComponent as MapWhite} from '../assets/map_white.svg';
import profile_image_placeholder from '../assets/profile_image.png';
import DashboardActionBtn from './DashboardActionBtn';
import withdraw_icon from '../assets/witdraw_icon.svg';
import deposit_icon from '../assets/deposit_icon.svg';
import winged_bitcoin from '../assets/winged_bitcoin.svg';
import c_coin from '../assets/c_coin.svg';
import BarChart from './BarChart';

const Overview = () => {
  // const [profileImage, setProfilePic] = useState(profile_image_placeholder);
  const wallet_balance = '$12,000';
  const user = JSON.parse(localStorage.getItem('user'));
  const cardtransactionstyle = ' text-white text-center text-xs w-1/2 hover:bg-gray-900 bg-black px-4 py-2'
  console.log(user.data);
  const user_actions = [{name: "Deposit",url: '', icon: deposit_icon},
                        {name: "Withdraw",url: '', icon: withdraw_icon},
                        {name: "Sell Crypto",url: '', icon: winged_bitcoin},
                        {name: "Buy Crypto",url: '', icon: c_coin}]
  return (
    <div className=' flex justify-between pl-4 md:pl-8 pr-4 pt-8'>
      <div>
        <h1 className=' font-Space-Grotesk font-bold text-lg p-2'>Dashboard</h1>
        <div className=' pl-6 mt-6'>
          <div className=' flex space-x-4 items-end'>
            <div className=' w-14'>
              <img src={profile_image_placeholder} alt="profile"/>
            </div>
            <div>
              <p className=' text-gray-400 font-inter'>Hello, <span className=' text-yellow-500 font-Space-Grotesk font-semibold'>{user.data.fullName}</span></p>
              <p className=' text-xs'>Welcome to your Dashboard</p>
            </div>
          </div>
            <div className=' flex space-x-4 mt-10'>
              {user_actions.map( (act, index)=> (
                <DashboardActionBtn name={act.name} icon={act.icon} url={act.url} key={index} />
              ))}
            </div>
          <div>
            <BarChart/>
          </div>
        </div>
      </div>
      <div className=' flex flex-col'>
        <div className=' absolute right-8 lg:right-0 lg:relative flex space-x-1 items-center justify-end cursor-pointer hover:bg-gray-200 p-2 mb-4'>
            <p className=' font-bold text-gray-600 text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
            <div className=' text-yellow-500 text-xl'>
              <RiArrowDownSFill/>
            </div>
        </div>
        <div className=' hidden lg:block bg-gold-card bg-center bg-contain bg-no-repeat w-60 h-40 pt-8 px-4'>
          <p className=' text-sm font-bold text-gray-600'>Wallet Balance</p>
          <p className=' text-left font-semibold font-Space-Grotesk text-3xl mt-4 mb-2'>{wallet_balance} USD</p>
          <div className=' flex space-x-1 w-full mx-auto justify-between'>
            <Link className={`${cardtransactionstyle} rounded-l-md`}>
              <p>WITHDRAW</p>
            </Link>

            <Link className={`${cardtransactionstyle} rounded-r-md`}>
              <p>FUND</p>
            </Link>
          </div>
        </div>
        <div className=' hidden lg:block bg-black text-white w-60 p-8 rounded-xl'>
          <p className=' text-center font-Space-Grotesk mb-4'>Be limitless, Get a secure wallet address in <span className=' text-yellow-200'>5 seconds</span></p>
          <div className=' w-full'>
            <MapWhite width='100%' height='50%'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;