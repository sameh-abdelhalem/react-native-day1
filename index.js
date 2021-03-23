/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppRouter from './Screens/Components/RNDay1/AppRouter';
import {name as appName} from './app.json';
// import AppStart from './Screens/Components/RNDay1/AppStart';
AppRegistry.registerComponent(appName, () => AppRouter);
