import React, { Component } from 'react';
import { } from 'react-native';
import firebase from 'firebase';
import { Container, Content, Form, Item, Input, Button, Label, Text, Spinner } from 'native-base';


class SignUpForm extends Component {
    // set state, used for textinput, error handling, and loading
    state = { firstName: '', lastName: '', email: '', password: '', error: '', loading: false };

    onButtonPress() {
        console.log('onButtonPress, trying sign up with firebase');
        const { email, password } = this.state;

        // reset the error message, sets loading to true
        this.setState({ error: '', loading: true });

        // returns a promise, asynchrounous request

         firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => this.storeUserInfo(user))
            .catch((error) => {
                this.onSignInFailed(error);
            });
    }

    //SignUp Failed
    onSignInFailed(error) {
        // fix error codes for sign up process
        // const temp = 'Sign Up failed with errors: ' + error.message;
        this.setState({ error: error.message, loading: false });
    }

    //sets state variables back to normal
    onSignInSuccess() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: '',
            loading: false
        });
        // // navigate back to login page
    }

    storeUserInfo(user) {
        const { firstName, lastName, email } = this.state;
        //fixme, update the displayName
        // user.updateProfile({ displayName: firstName });

        // push info into the database
        firebase.database().ref(`users/${user.uid}`)
            .push({ firstName, lastName, email })
            .then(this.onSignInSuccess());
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
                    <Text>Sign Up</Text>
                </Button>
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel last>
                            <Label>First Name</Label>
                            <Input
                                value={this.state.firstName}
                                onChangeText={firstName => this.setState({ firstName })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Last Name</Label>
                            <Input
                                value={this.state.lastName}
                                onChangeText={lastName => this.setState({ lastName })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label> Email </Label>
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
                {/*FIXME, Sign in button IS currently on the bottom  */}
                {this.renderButton()}
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

export { SignUpForm };

