import React, { Component } from 'react';
import {
    Body, 
    Button, 
    Header, 
    Icon, 
    Left, 
    Right, 
    Title, 
} from 'native-base';

class HeaderCal extends Component {
    render() {
        return (
                <Header>
                    <Left> 
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('Drawer')}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>

                    <Body style={{ justifyContent: 'center' }}>
                        {/* <Title>{this.props.headerText}</Title> */}
                        <Title>CalendAR</Title>
                    </Body>

                    <Right>
                        <Button
                            transparent
                        >
                            <Icon name="keypad" />
                        </Button>
                    </Right>

                </Header>
        );
    }
}

//export if you use export *, must be an object
export { HeaderCal };
