import React, { Component } from 'react';
import { } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Button, Label, Text, Spinner } from 'native-base';


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
            .catch((error) => {
                this.onLoginFailed(error);
            });
    }

    onSignUpPress() {
        Actions.signUp();
    }

    //login failed
    onLoginFailed(error) {
        if (error.code === 'auth/wrong-password') {
            const temp = 'The password is incorrect';
            this.setState({ error: temp, loading: false });
        } else {
            this.setState({ error: error.message, loading: false });
        }
    }

    //sets state variables back to normal
    onLoginSuccess() {
        this.setState({
            email: '',
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
        <Container>
            <Button
                block
                //becuase this will happen something, we must bind the context to this
                onPress={this.onButtonPress.bind(this)}
            >
                <Text>Login</Text>
            </Button>
            <Button
                block info
                //becuase this will happen something, we must bind the context to this
                onPress={this.onSignUpPress.bind(this)}
            >
                <Text>Sign Up</Text>
            </Button>
        </Container>
    );
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

