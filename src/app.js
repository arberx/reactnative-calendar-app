import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';
import firebase from 'firebase';
import { HeaderCal, CalendarContent, LoginForm } from './components/common';
import RouterComponent from './Router';

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
                        <HeaderCal headerText={'Welcome ' + this.state.user.email + '!'} />
                        <CalendarContent />
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
