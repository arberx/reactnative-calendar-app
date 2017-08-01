import React, { Component } from 'react';
import { Container, Header, Left, Body, Title } from 'native-base';

class HeaderCal extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title>{this.props.headerText}</Title>
                    </Body>
                    </Left>
                </Header>
            </Container>
        );
    }
}

//export if you use export *, must be an object
export { HeaderCal };
