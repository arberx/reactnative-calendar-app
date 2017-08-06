import React, { Component } from 'react';
import { } from 'react-native';
import firebase from 'firebase';
import { Container, Content, Form, Item, Input, Button, Label, Text, Spinner } from 'native-base';
import { HeaderCal } from './HeaderCal';

class LoginForm extends Component {
    // set state, used for textinput, error handling, and loading
    state = { email: '', password: '', error: '', loading: false };

    // use firebase function to authenticate the user
    // handles errors
    onButtonPress() {
        console.log('onButtonPress, trying logging in with firebase');
        const { email, password } = this.state;

        // reset the error message, sets loading to true
        this.setState({ error: '', loading: true });

        // returns a promise, asynchrounous request
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                //if authentication has failed, create the user and password
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
            });
    }

    //login failed
    onLoginFailed() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    //sets state variables back to normal
    onLoginSuccess() {
        this.setState({
            email:'',
            password: '',
            error: '',
            loading: false
        });
    }

    //show button or spinner
    renderButton() {
        if (this.state.loading) {
           return <Spinner color='red' />;
        }

        // else return the button
        return (
        <Button
            block
            //becuase this will happen something, we must bind the context to this
            onPress={this.onButtonPress.bind(this)}
        >
            <Text>Login</Text>
        </Button>);
    }

    render() {
        return (
                <Container>
                    <Content>
                        <Form>
                            {/*Item is a wrapper arround React-Native TextInput  */}
                            <Item floatingLabel last>
                                <Label>Email</Label>
                                <Input
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    //default to true
                                    secureTextEntry
                                />
                            </Item>
                        </Form>
                    </Content>
                    {/*ERROR MESSAGE, FIXME WITH STYLING  */}
                    <Text style={Styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    {/*FIXME, Login in button IS currently on the bottom  */}
                    {/* Helper that returns some amount of JSX  */}
                   { this.renderButton() }
                </Container>
        );
    }
}

const Styles = {
    // handle error input
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export { LoginForm };

