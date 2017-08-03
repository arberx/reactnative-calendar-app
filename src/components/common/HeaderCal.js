import React, { Component } from 'react';
import { Header, Left, Body, Title } from 'native-base';


class HeaderCal extends Component {
    render() {
        return (
                <Header>
                    <Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title>{this.props.headerText}</Title>
                    </Body>
                    </Left>
                </Header>
        );
    }
}

//export if you use export *, must be an object
export { HeaderCal };
