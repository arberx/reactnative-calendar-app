import React, { Component } from 'react';
import { Fab, Button, Icon } from 'native-base';

/* TODO: add event that user can create new event on current calendar.
- This is a class, because the FAB has state. This state represents whether
the Fab is active or not
*/
class EventButton extends Component {
    constructor() {
        super();
        this.state = {
            active: 'true'
        };
    }
// TODO, use a button with on Press event to pull up a form for the user to use to create a calendar event
// SEE nativebase docs for details on how to do this
    render() {
        return (
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="add" />
                </Fab>
                );
    }
}

export default EventButton;
