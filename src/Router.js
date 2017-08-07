import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { LoginForm, SignUpForm } from './components/common';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="CalendAR" />
                <Scene key="signUp" component={SignUpForm} title="Sign Up" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
