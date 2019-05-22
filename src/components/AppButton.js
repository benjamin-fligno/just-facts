import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import theme from '../styles/theme';

class AppButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onPressOut, label, buttonType, width, color } = this.props;

        const styles = StyleSheet.create({
            mainContainer: {
                marginTop: 10,
                marginBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
                alignItems: 'center',
            },
            container: {
                width: width || '100%',
                paddingTop: 12,
                paddingBottom: 12,
                borderRadius: 50,
                alignItems: 'center',
                backgroundColor: buttonType || theme.button.default
            },
            label: {
                fontFamily: theme.fontFamily.medium,
                fontSize: 20,
                color: color || '#fff'
            }
        });

        return (
            <View style={styles.mainContainer}>
                <TouchableNativeFeedback onPressOut={onPressOut}>
                    <View style={styles.container}>
                        <Text style={styles.label}>
                            {label}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}



export default AppButton;
