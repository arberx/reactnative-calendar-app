import React, { Component } from 'react';
import { Container } from 'native-base';
import EventButton from './AddEventButton';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';

// CLASSE NAMES MUST BE CAPITAL IN REACT-NATIVE TOOK ME FUCKING 1 HOUR TO FIGURE THAT OUT
class CalendarContent extends Component {

    // example on how to populate the Agenda, taken from wix github page
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    // this loads random items into the
    loadItems(day) {
        //loggin to see output
        console.log('LoadItems called');

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            // console log
            console.log(newItems);
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
        );
    }

    render() {
        return (
            <Container>
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                 selected={new Date().toJSON().slice(0, 10).replace(/-/g, '/')}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
            // monthFormat={'yyyy'}
            //theme={{calendarBackground: 'red'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
            <EventButton />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

export { CalendarContent };

