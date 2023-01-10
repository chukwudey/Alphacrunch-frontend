import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import circle_tick_good_black_bg from '../assets/circle_tick_good_black_bg.svg';
import BlackBtn from './BlackBtn';

const GiftcardsCard = (props) => {
    const {title,description,list,image} = props;
    
  return (
    <section className=' md:flex justify-between items-end bg-pri-pink mx-auto my-4 rounded-2xl px-20 pt-20 w-11/12'>
        <div className=' md:w-2/5 mb-2'>
            <h3 className=' text-4xl font-bold mb-6 font-Space-Grotesk'>{title}</h3>
            <p className=' font-inter mb-8'>{description}</p>
            <div className=' mb-12 mt-4'>
                {list? list.map(e => 
                    <div className=' flex space-x-4 my-2'>
                        <div>
                            <img src={circle_tick_good_black_bg} alt="checked"/>
                        </div>
                        <p className=' font-inter'>{e}</p>
                    </div>
                ) : <AiOutlineLoading3Quarters/>}
            </div>
            <div className=' text-center md:mb-12'>
                <BlackBtn url='' text='Start Trading'/>
            </div>
        </div>
        <div className=''>
            <img className='' src={image} alt="bank cards stacked on each other like a fan"/>
        </div>
    </section>
  )
}

export default GiftcardsCard
