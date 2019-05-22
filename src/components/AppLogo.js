'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';

class AppLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { flex, width, height } = this.props;
        const styles = {
            image: {
                flex: flex || 1,
                width: width || '100%',
                height: height || '100%',
            }
        }
        return (
            <Image
                source={require('../../assets/images/001-ghost.png')}
                resizeMode="contain"
                style={styles.image} />
        );
    }
}

export default AppLogo;
