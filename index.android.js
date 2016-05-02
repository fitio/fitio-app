/**
 * Copyright (c) 2016, fitio
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 *
 */

'use strict';

import React, {AppRegistry, Component} from 'react-native';
import RootRouter from './app/Components/RootRouter';

class fitio extends Component {
    render() {
        return (
            <RootRouter />
        );
    }
}

AppRegistry.registerComponent('fitio', () => fitio);
