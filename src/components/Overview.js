import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {ReactComponent as MapWhite} from '../assets/map_white.svg';
import profile_image_placeholder from '../assets/profile_image.png';
import DashboardActionBtn from './buttons/DashboardActionBtn';
import withdraw_icon from '../assets/witdraw_icon.svg';
import deposit_icon from '../assets/deposit_icon.svg';
import winged_bitcoin from '../assets/winged_bitcoin.svg';
import statistics_pending from '../assets/statistics_pending.svg';
import statistics_failed from '../assets/statistics_failed.svg';
import statistics_successful from '../assets/statistics_successful.svg';
import c_coin from '../assets/c_coin.svg';
import BarChart from './BarChart';
import StatisticsOption from './StatisticsOption';

const Overview = () => {
  // const [profileImage, setProfilePic] = useState(profile_image_placeholder);
  const wallet_balance = '$12,000';
  const oldDate = new Date();
  const newDate = oldDate.toDateString();
  const user = JSON.parse(localStorage.getItem('user'));
  const cardtransactionstyle = ' text-white text-center text-2xs w-1/2 hover:bg-gray-900 bg-black px-4 py-2'
  console.log(user);
  const user_actions = [{name: "Deposit",url: '', icon: deposit_icon},
                        {name: "Withdraw",url: '', icon: withdraw_icon},
                        {name: "Sell Crypto",url: '', icon: winged_bitcoin},
                        {name: "Buy Crypto",url: '', icon: c_coin}]
  const StatisticsOptions = [
    {name: "Pending Transactions", amount: 12, image: statistics_pending},
    {name: "Successful Transactions", amount: 20, image: statistics_successful},
    {name: "Failed Transactions", amount: 2, image: statistics_failed}

  ]
  return (
    <div className=' flex justify-between mx-auto pl-4 md:pl-8 pr-4 pt-8'>
      <div className=' w-full'>
        <h1 className=' hidden md:block font-Space-Grotesk font-bold text-lg p-2'>Dashboard</h1>
        <div className=' md:pl-6 mt-6'>
          <div className=' flex space-x-4 justify-between items-center w-max'>
            <div className=' flex space-x-4 items-end'>
              <div className=' w-14'>
                <img src={profile_image_placeholder} alt="profile"/>
              </div>
              <div>
                <p className=' text-gray-400 font-inter text-sm md:text-base'>Hello, <span className=' text-yellow-500 font-Space-Grotesk font-semibold'>{user.fullName}</span></p>
                <p className=' text-xs'>Welcome to your Dashboard</p>
              </div>
            </div>
            <div className=' flex md:hidden space-x-4 items-center cursor-pointer rounded-md hover:bg-gray-200 p-2'>
              <p className=' font-bold text-gray-600 text-sm md:text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
              <div className=' text-yellow-500 text-xl'>
                <RiArrowDownSFill/>
              </div>
            </div>
          </div>
            <div className=' grid grid-cols-2 gap-2 items-center w-full md:flex md:space-x-4 mt-2 p-2 mb-2'>
              {user_actions.map( (act, index)=> (
                <DashboardActionBtn name={act.name} icon={act.icon} url={act.url} key={index} />
              ))}
            </div>
          <div className=' p-2'>
            <BarChart/>
          </div>
          <div className=' w-10/12 rounded-2xl border border-yellow-200 overflow-hidden'>
            <div className=' flex justify-between w-full items-center p-4 '>
              <p className=' font-Space-Grotesk font-bold'>Recent activity</p>
              <div className=' flex items-center hover:bg-gray-300 p-1 cursor-pointer'>
                <p className=' text-2xs'>View more</p>
                <div className=' text-yellow-500 text-2xl'>
                  <RiArrowDownSFill/>
                </div>
              </div>
            </div>
            
            <div className=' p-4 hover:bg-pri-pink flex'>
              <p className=' font-bold text-gray-800 text-sm pr-4'>{newDate}</p>
              <div className=' flex justify-between w-full'>
                <div>
                  <p className=' font-bold text-gray-800 text-sm'>Transfer to your Bank Account Completed</p>
                  <p className=' font-bold text-2xs text-gray-600'>Completed</p>  
                </div>
                <div className=' flex pr-4'>
                  <p className=' font-bold text-gray-800 text-sm'>$1200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col'>
        <div className=' absolute right-8 lg:right-0 lg:relative hidden md:flex space-x-1 items-center justify-end cursor-pointer hover:bg-gray-200 p-2 mb-4'>
            <p className=' font-bold text-gray-600 text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
            <div className=' text-yellow-500 text-xl'>
              <RiArrowDownSFill/>
            </div>
        </div>
        <div className=' hidden lg:block bg-gold-card bg-center bg-contain bg-no-repeat w-60 h-44 pt-8 px-4'>
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
        <div className=' hidden lg:block p-4 border border-yellow-300 rounded-lg mt-4'>
          <h3 className=' font-Space-Grotesk font-bold text-lg'>Statistics</h3>
          <div>
          {StatisticsOptions.map( (option, index)=> (
                <StatisticsOption name={option.name} amount={option.amount} image={option.image} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;