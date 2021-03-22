/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';
import Students from '../../Data/StudentData';
import StudentList from './List';

export default class App extends React.Component {
  state = {
    StdArray: Students,
    txtName: 'Nadia',
    txtAge: '23',
  };
  AddnewElement = () => {
    let newStd = {
      Id: 4,
      Name: this.state.txtName,
      Age: this.state.txtAge,
      Address: 'ABC Alex',
    };
    this.state.StdArray.push(newStd);
    console.log(this);
    console.log(this.state.StdArray);
    //rerender comp and apply VDM
    this.setState({
      StdArray: this.state.StdArray,
    });
  };

  render() {
    return (
      <>
        <StudentList />
      </>
    );
  }
}
