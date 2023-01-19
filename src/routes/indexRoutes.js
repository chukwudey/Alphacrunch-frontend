import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GiftcardsCard from '../components/GiftcardsCard';
import { cryptocard_card_details, giftcard_card_details, ratecard_card_details } from '../constants/details';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import Overview from '../components/Overview';

const IndexRoutes = () => {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    {/* making sure the home page defaults to crypto in the services section */}
                    <Route index element={<Navigate to='cryptocurrency-card'/>}/> 
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
                <Route path='/signup' element={<SignupPage/>} />
                <Route path='/signin' element={<LoginPage/>} />
                <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
                <Route path='/reset-password' element={<ResetPasswordPage/>} />

                <Route path='/dashboard' element={<DashboardPage/>}>
                    <Route index element={<Navigate to='overview'/>}/>
                    <Route path='*' element={<Overview/>} />
                </Route>
                {/* <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
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
