'use strict';

import React, { Component } from 'react';
import { StackActions } from 'react-navigation';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import theme from '../styles/theme';
import AppLogo from '../components/AppLogo';
import AppButton from '../components/AppButton';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <AppLogo width="60%" flex={2} />

        <Text style={{
          marginTop: -40,
          flex: 1,
          color: theme.colors.secondary,
          fontFamily: theme.fontFamily.bold,
          fontSize: 45
        }}>Just Facts!</Text>

        <AppButton 
          onPressOut={() => {
            this.props.navigation.dispatch(
              StackActions.push({
                routeName: 'SignIn'
              })
            )
          }}
          label="Get Started"
          buttonType={theme.button.danger}
          width="90%"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
