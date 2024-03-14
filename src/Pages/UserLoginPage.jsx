import React from 'react';
import LoginForm from '../component/LoginForm';
import AppNavBar from '../component/AppNavBar';

const UserLoginPage = () => {
    return (
        <div>
            <AppNavBar/>
            <LoginForm/>
        </div>
    );
};

export default UserLoginPage;