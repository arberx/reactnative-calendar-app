import React, { Component } from 'react';
import { View } from 'react-native';
import { headerCal, calendarContent } from './components/common';

class App extends Component {
    render() {
        return (
            // <View>
            // // figure out the layout
            // <headerCal headerText="CalendAR" />
            // render this if user has created a calendar, and viewing it
            <calendarContent />
            // </View>
        );
    }
}

export default App;
