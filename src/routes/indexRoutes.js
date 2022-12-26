import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GiftcardsCard from '../components/GiftcardsCard';
// import bank_card from '../assets/bank_cards.svg';
// import phone_crypto from '../assets/phone_crypto.svg';
import { cryptocard_card_details, giftcard_card_details, ratecard_card_details } from '../constants/names';

const IndexRoutes = () => {
    // const giftcard_card_details = {
    //     title : 'Giftcard',
    //     description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    //     list:['Itunes', 'Steam', 'Google', 'Visa', 'Amazon', 'Nike'],
    //     image: bank_card
    // }
    
    //  const cryptocard_card_details = {
    //     title : 'Cryptocurrency',
    //     description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    //     list:['Bitcoin', 'Ethereum', 'Litecoin', 'Tether', 'Dai'],
    //     image: phone_crypto
    // }
    
    // const ratecard_card_details = {
    //     title : 'Rates',
    //     description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    //     list:['Cheap', 'Current', 'Trusted'],
    //     image: bank_card
    // }
    debugger;
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    <Route index element={<GiftcardsCard/>}/>
                    <Route path='giftcard-card' element={<GiftcardsCard 
                        list={giftcard_card_details.list}
                        title={giftcard_card_details.title} 
                        image={giftcard_card_details.image}
                        description={giftcard_card_details.description} />}/>
                    <Route path='cryptocurrency-card' element={<GiftcardsCard 
                        list={cryptocard_card_details.list} 
                        title={cryptocard_card_details.title}
                        image={cryptocard_card_details.image} 
                        description={cryptocard_card_details.description} />}/>
                    <Route path='rates-card' element={<GiftcardsCard 
                        list={ratecard_card_details.list} 
                        title={ratecard_card_details.title} 
                        image={ratecard_card_details.image}
                        description={ratecard_card_details.description} />}/>
                </Route>
                <Route path='/signup' element={<HomePage />} />
                {/*<Route path='/login' element={<LoginPage />} />
                <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
                <Route path='/ResetPassword' element={<ResetPasswordPage />} />
                <Route path='/skillEvaluation' element={<SkillEvaluationPage />} />
                <Route path='/Dashboard/PerformanceReport' element={<PerformancePage />} />
                <Route path='/Dashboard/Overview' element={<OverviewPage />} />
                <Route path='/dashboard/profileSettings' element={<ProfileSettingsPage />} />
                <Route path='/dashboard/TestPage' element={<TestPage />} /> */}
            </Routes>
        </Router>
    );
}

export default IndexRoutes;
