import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiArrowDownSFill } from 'react-icons/ri';
import profile_image_placeholder from '../assets/profile_image.png';
import { GIFTCARDS } from '../constants/details';
import { Bars } from 'react-loader-spinner';
import { GET_GIFTCARD } from '../constants/links';

const GiftCardPage = () => {
    const wallet_balance = '$12,000';
    const [giftcards, setGiftcards] = useState(GIFTCARDS);

    const token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
        axios.get(GET_GIFTCARD, config).then(res=>{
            const resCards = res.data.data;

            resCards.forEach((element, index) => {
                setGiftcards((prev)=>{
                const newCard = prev.map((card, cardIndex)=>{
                    if (index === cardIndex) {
                        return element;
                    }
                    return card;
                    })
                    return newCard;
                })
            });
            

        })
    }, [])
    // const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className=' border-4 w-full p-8 mx-auto'>
        <div className=' flex justify-between items-end mb-6'>
            <p className=' font-bold font-Space-Grotesk'>Kindly Select The Type of Giftcard</p>
            <div className=' flex'>
                <div className=' flex  space-x-4 items-center cursor-pointer rounded-md hover:bg-gray-200 p-2'>
                    <p className=' font-bold text-gray-600 text-sm md:text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
                    <div className=' text-yellow-500 text-xl'>
                        <RiArrowDownSFill/>
                    </div>
                </div>
                <div className=' flex space-x-4 items-end'>
                    <div className=' w-14'>
                        <img src={profile_image_placeholder} alt="profile"/>
                    </div>
                </div>
            </div>
        </div>
      <div className=' grid gap-1 grid-cols-4 border p-6 border-gray-400 rounded-md mx-auto'>
        {giftcards.length > 0 ? giftcards.map((value,index)=>(
                <div key={index} className=' hover:bg-gray-400 w-4/5 cursor-pointer p-2 rounded-xl'>
                    <img className=' h-full' src={value.picture_url} alt={value.name}/>
                </div>
        )):
            <div className=' shadow-lg z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Bars
                    height="100"
                    width="300"
                    color="#FFBF00"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClassName=" mx-auto"
                    visible={true}
                />
            </div>
        }
      </div>
    </div>
  )
}

export default GiftCardPage

