import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const IndexRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>} />
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
