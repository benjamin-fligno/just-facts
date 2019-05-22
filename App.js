import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { AppLoading } from 'expo';
import Navigator from './src/Navigator';
import { Font } from 'expo';


const AppContainer = createAppContainer(Navigator);

class App extends Component {
  state = {
    assetsReady: false
  };

  constructor(props) {
    super(props);
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      'googlesans-bold': require('./assets/fonts/GoogleSans-Bold.ttf'),
      'googlesans-italic': require('./assets/fonts/GoogleSans-Italic.ttf'),
      'googlesans-medium': require('./assets/fonts/GoogleSans-Medium.ttf'),
      'googlesans-regular': require('./assets/fonts/GoogleSans-Regular.ttf')
    });
  }

  render() {
    if (!this.state.assetsReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ assetsReady: true })}
          onError={console.warn}
        />
      );
    }

    return <AppContainer />;
  }
}

export default App;
