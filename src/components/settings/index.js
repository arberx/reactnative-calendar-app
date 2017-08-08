import React, { Component } from 'react';
import { 
    ListItem
} from 'native-base';

class Settings extends Component {
    render() {
        return (
            <ListItem>
                Home
            </ListItem>
        );
    }
}

//export if you use export *, must be an object
export { Settings };
