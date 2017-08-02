import React, { Component } from 'react';
import { Container } from 'native-base';
import { HeaderCal, CalendarContent } from './components/common';

class App extends Component {
    render() {
        return (
            <Container>
                <HeaderCal headerText="CalendAR" />
                <CalendarContent />
            </Container>
        );
    }
}

export default App;
