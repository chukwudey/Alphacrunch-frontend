import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import circle_tick_good_black_bg from '../assets/circle_tick_good_black_bg.svg';
import BlackBtn from './BlackBtn';

const GiftcardsCard = (props) => {
    const {title,description,list,image} = props;
    
  return (
    <div className=' md:flex justify-between bg-pri-pink mx-auto my-4 rounded-2xl px-20 pt-20 w-11/12'>
        <div className=' md:w-2/5 mb-2'>
            <h3 className=' text-2xl font-semibold mb-6'>{title}</h3>
            <p>{description}</p>
            <div className=' mb-12'>
                {list? list.map(e => 
                    <div className=' flex space-x-1 m-4'>
                        <div>
                            <img src={circle_tick_good_black_bg} alt="checked"/>
                        </div>
                        <p>{e}</p>
                    </div>
                ) : <AiOutlineLoading3Quarters/>}
            </div>
            <div className=' text-center'>
                <BlackBtn url='' text='Start Trading'/>
            </div>
        </div>
        <div className=''>
            <img className='' src={image} alt="bank cards stacked on each other like a fan"/>
        </div>
    </div>
  )
}

export default GiftcardsCard
