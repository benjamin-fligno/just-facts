'use strict';

import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import AppLogo from '../components/AppLogo';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import theme from '../styles/theme';

class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
        header: null
    }

    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <AppLogo width="60%" flex={1} />

                <AppTextInput
                    label="Email"
                    placeholder="Enter your email..."
                    onChangeText={(email) => this.setState({ email })}
                />

                <AppTextInput
                    label="Password"
                    placeholder="Enter your password..."
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true}
                />

                <AppButton 
                    onPressOut={() => {
                        this.props.navigation.dispatch(
                            StackActions.push({
                                routeName: 'Login'
                            })
                        )
                    }}
                    label="Sign In"
                    buttonType={theme.button.primary}
                    width="90%"
                />
                

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignInScreen;
