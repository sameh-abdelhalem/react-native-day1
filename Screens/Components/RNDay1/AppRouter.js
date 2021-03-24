/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StudentList from './List';
import AddComponent from './AddComponent';
import EditComponent from './EditComponent';
export default class AppRouter extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StudentList} />
          <Stack.Screen name="AddStudent" component={AddComponent} />
          <Stack.Screen name="EditStudent" component={EditComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
