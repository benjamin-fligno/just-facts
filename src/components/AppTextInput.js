import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import theme from '../styles/theme';

class AppTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { placeholder, label, onChangeText, secureTextEntry, value } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    value={value}
                    style={styles.textInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%'
    },
    label: {
        width: '100%',
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontFamily: theme.fontFamily.regular
    },
    textInput: {
        width: '100%',
        height: 55,
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        borderColor: '#eee',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 25
    }
})

export default AppTextInput;
