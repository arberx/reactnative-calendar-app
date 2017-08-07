import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { LoginForm } from './components/common';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="CalendAR" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
