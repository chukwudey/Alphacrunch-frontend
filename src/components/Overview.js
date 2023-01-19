import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import { BsBoxArrowInDownLeft, BsBoxArrowUpRight } from 'react-icons/bs';

const Overview = () => {
  const wallet_balance = '$12,000';
  const user = JSON.parse(localStorage.getItem('user'));
  const cardtransactionstyle = ' text-white text-center text-xs w-1/2 hover:bg-gray-900 bg-black px-4 py-2'
  console.log(user.data);
  return (
    <div className=' flex justify-between pl-4 md:pl-8 pr-4 pt-8'>
      <div>
        <h1 className=' font-Space-Grotesk font-bold text-lg p-2'>Dashboard</h1>
        <div>
          
        </div>
      </div>
      <div>
        <div className=' flex space-x-1 items-center justify-end cursor-pointer hover:bg-gray-200 p-2 mb-4'>
            <p className=' font-bold text-gray-600 text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
            <div className=' text-yellow-500 text-xl'>
              <RiArrowDownSFill/>
            </div>
        </div>
        <div className=' hidden md:block bg-gold-card bg-center bg-contain bg-no-repeat w-60 h-40 pt-8 px-4'>
          <p className=' text-sm font-bold text-gray-600'>Wallet Balance</p>
          <p className=' text-left font-semibold font-Space-Grotesk text-3xl mt-4'>{wallet_balance} USD</p>
          <div className=' flex space-x-1 w-full mx-auto justify-between'>
            <Link className={`${cardtransactionstyle} rounded-l-md`}>
              <p>WITHDRAW</p>
            </Link>

            <Link className={`${cardtransactionstyle} rounded-r-md`}>
              <p>FUND</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;