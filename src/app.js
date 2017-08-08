import React, { Component } from 'react';

import { Platform } from 'react-native';
import { Container, Root, Spinner } from 'native-base';
import { StackNavigator } from 'react-navigation';

import firebase from 'firebase';
import { CalendarContent, HeaderCal, Settings, Sidebar } from './components/';
import RouterComponent from './Router';
import Drawer from './Drawer';

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Sidebar: { screen: Sidebar },

        // HeaderCal: { screen: HeaderCal },

        CalendarContent: { screen: CalendarContent },
        Settings: { screen: Settings }
    },
    {
        initialRouteName: 'Drawer',
        headerMode: 'none',
    }
);

class App extends Component {
    state = { loggedIn: null, user: null };

    // my firebase route: arber
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAKmk_uDhBpUe9ZIoV_2COCoc0kpfVJHh0',
            authDomain: 'calendar-7e610.firebaseapp.com',
            databaseURL: 'https://calendar-7e610.firebaseio.com',
            projectId: 'calendar-7e610',
            storageBucket: 'calendar-7e610.appspot.com',
            messagingSenderId: '319194412032'
        });

        firebase.auth().onAuthStateChanged((user) => {
            //user is null, if user is signed in or not
            if (user) {
                this.setState({ loggedIn: true, user });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Container>
                        <Root>
                            <HeaderCal />
                            <AppNavigator />
                        </Root>
                        {/* <HeaderCal headerText={'Welcome ' + this.state.user.email + '!'} />
                        <CalendarContent /> */}
                    </Container>
                );

            case false:
                return (
                    <RouterComponent />
                );

            default:
                return <Spinner color='red' />;
        }
    }

    render() {
        return (
            <Container>
                { this.renderContent() }
            </Container>
        );
    }
}

export default App;
