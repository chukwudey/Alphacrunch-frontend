import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiArrowDownSFill } from 'react-icons/ri';
import profile_image_placeholder from '../assets/profile_image.png';
import { CardTypes, GIFTCARDS, SupportedCurrencies } from '../constants/details';
import { Bars } from 'react-loader-spinner';
import { GET_GIFTCARD } from '../constants/links';
import spinner from '../assets/Spinner.gif';

const GiftCardPage = () => {
    const wallet_balance = '$12,000';
    const [show, setShow] = useState(false);
    const [giftcards, setGiftcards] = useState(GIFTCARDS);
    const [rate, setRate] = useState(0);
    const [cardImage, setCardImage] = useState(spinner);
    const [cardName, setCardName] = useState('');
    const [currencyType, setCurrencyType] = useState(SupportedCurrencies[0]);
    const [cardType, setCardType] = useState(CardTypes.physical);
    const [amount, setAmount] = useState(0);
    const [cardQuantity, setCardQuantity] = useState(0);
    // const [cardQuantityInput, setCardQuantityInput] = useState('text');

    
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

    const handleChangeCurrency = (e) =>{
        console.log(e.currentTarget );
        setCurrencyType(SupportedCurrencies[e.currentTarget.value]);
    }

    const handleSubmitGiftCard = (e) => {
        e.preventDefault();
        alert('submited');
    }


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
    <div className={`${show? 'flex': 'hidden'} border-4 w-full lg:flex-row flex-col-reverse lg:justify-between p-8 lg:mx-auto transition-all`}>
        <form onSubmit={(e)=>handleSubmitGiftCard(e)} className=' border-2 border-gray-500 w-full rounded-md px-8 py-10 mt-20 lg:w-2/3'>
            <div className=' flex items-center space-x-4 outline-none focus:outline-none mb-4'>
                <p className=' font-Space-Grotesk font-bold'>Select Currency Type</p>
                <div className=' bg-gray-200 px-6 py-4'>
                    <select className=' bg-gray-200 focus:outline-none w-3/4 ' onChange={(e)=>handleChangeCurrency(e)} >
                        <option className=' bg-pri-pink hover:bg-yellow-300' value="0">{SupportedCurrencies[0].code} {SupportedCurrencies[0].symbol}</option>
                        <option className=' bg-pri-pink hover:bg-yellow-300' value="1">{SupportedCurrencies[1].code} {SupportedCurrencies[1].symbol}</option>
                    </select>
                </div>
            </div>
            <p className=' font-Space-Grotesk font-semibold mb-2'>Kindly select the type of card</p>
            <div className=' flex justify-between mb-6'>
                <button 
                    onClick={()=> setCardType(CardTypes.physical)}
                    className={`  px-4 py-2 ${cardType === CardTypes.physical? ' bg-black text-white ' : ' bg-white text-black '} w-3/6`} type="button">{CardTypes.physical}</button>
                <button 
                    onClick={()=> setCardType(CardTypes.eCode)}
                    className={`  px-4 py-2 ${cardType === CardTypes.eCode? ' bg-black text-white ' : ' bg-white text-black '} w-3/6`} type="button">{CardTypes.eCode}</button>
            </div>
            <div className=' flex justify-between'>
                <label for="amount" className=' font-Space-Grotesk font-semibold'>Input Amount</label>
                <p className=' text-sm'>Current rate: <span className=' text-yellow-400'>{rate}/$</span></p>
            </div>
            <div className=' flex justify-between'>
                <div className=' w-3/5 border border-gray-800 px-4 py-2'>
                    <span className=' mr-2'>$</span><input className=' bg-transparent w-10/12' type="number" min={0} name="amount" value={amount} onChange={(e)=>setAmount(e.currentTarget.value)}/>
                </div>
                <div className=' w-1/3 bg-gray-400 px-4 py-2'>
                    <input className=' bg-transparent w-full' type="number" min={0}  max={20} name="card-quantity" value={cardQuantity} onChange={(e)=>setCardQuantity(e.currentTarget.value)} placeholder='No of Cards'/>
                </div>
            </div>
            <hr className=' h-1 w-full bg-gray-700 mt-4 mb-8'/>
            <p className=' text-2xl font-Space-Grotesk font-bold text-center'>You will get: ₦{ amount * cardQuantity * rate}</p>
        </form>
        <div className=' flex flex-col lg:items-end'>
            <div className=' flex'>
                <div className=' flex  space-x-4 items-center cursor-pointer rounded-md hover:bg-gray-200 p-2'>
                    <p className=' font-bold text-gray-600 text-sm lg:text-lg '>Balance: <span className=' text-yellow-500'>{wallet_balance}</span> </p>
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
            <div className=' border-2 border-gray-500 rounded-md p-4 mt-6'>
                <p className=' font-Space-Grotesk'>Order Summary</p>
                <div className=' flex justify-center'>
                    <img src={cardImage} alt={cardName}/>
                </div>
                <div className=' text-center'>
                    <p className=' text-sm'><span>{currencyType.code}</span> | <span>{cardType}</span> </p>
                    <p className=' text-sm'><span>{currencyType.symbol}</span><span>{amount}</span> x <span>{cardQuantity}</span> = ₦{ amount * cardQuantity * rate} </p>
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

