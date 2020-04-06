import React from 'react'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'
import Footer from './footer';

const Homepage = () => (
    <div className="welcome_page">
        <LoginFormContainer />
        <SignupFormContainer />  
        <Footer />
    </div>
);

export default Homepage;