import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiArrowDownSFill } from 'react-icons/ri';
import profile_image_placeholder from '../assets/profile_image.png';
import { GIFTCARDS } from '../constants/details';
import { Bars } from 'react-loader-spinner';
import { GET_GIFTCARD } from '../constants/links';
import spinner from '../assets/Spinner.gif';

const GiftCardPage = () => {
    const wallet_balance = '$12,000';
    const [show, setShow] = useState(false)
    const [giftcards, setGiftcards] = useState(GIFTCARDS);
    const [rate, setRate] = useState(0);
    const [cardImage, setCardImage] = useState(spinner);
    const [cardName, setCardName] = useState('');

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
            

        }).catch(error=> {
            console.log(error);
        })
    }, []);


    const startGiftcardTransaction = (image, rate, name) => {
        if (rate === 0) {
            return
        }
        setShow(true);
        setRate(rate);
        setCardName(name);
        setCardImage(image);
    }
    // const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
    <div className={`${show? 'flex': 'hidden'} border-4 w-full justify-between p-8 mx-auto transition-all`}>
        <div className=' border-2 px-8 py-10'>
            <div className=' flex items-center space-x-4 outline-none focus:outline-none'>
                <p className=' font-Space-Grotesk font-bold'>Select Currency Type</p>
                <div className=' bg-gray-200 px-6 py-4'>
                    <select className=' bg-gray-200' >
                        <option value="USD">US-USD $</option>
                        <option value="NGN">NG-NGN ₦</option>
                    </select>
                </div>
            </div>
            <p>{rate}</p>
        </div>
        <div>
            <div>
                <p>Order Summary</p>
                <div>
                    <img src={cardImage} alt={cardName}/>
                </div>
            </div>
            
        </div>
    </div>
    <div className={`${!show? 'block': 'hidden'} border-4 w-full p-8 mx-auto transition-all`}>
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
                <div key={index} className=' hover:bg-gray-400 w-4/5 cursor-pointer p-2 rounded-xl' onClick={()=>startGiftcardTransaction(value.picture_url, value.rate, value.name)}>
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
    </>
  )
}

export default GiftCardPage

