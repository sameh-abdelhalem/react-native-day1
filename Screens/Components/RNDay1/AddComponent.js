/* eslint-disable prettier/prettier */
import {Button, Form, Input, Item} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

/* eslint-disable prettier/prettier */
export default class AddComponent extends React.Component {
  state = {
    txtName: '',
    txtAge: '',
  };
  fireHandler = () => {
    const newStd = {
      Id: 4,
      Name: this.state.txtName,
      Age: this.state.txtAge,
      Address: 'ABC Alex',
    };
    this.props.route.params.customHandler(newStd);
    this.setState({
      txtName: '',
      txtAge: '',
    });
    this.props.navigation.navigate('Home');
  };

  render() {
    console.log(this.props);
    return (
      <Form>
        <Item>
          <Input
            keyboardType="default"
            placeholder="Username"
            value={this.state.txtName}
            onChangeText={txtName => {
              this.setState({txtName});
            }}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Age"
            keyboardType="numeric"
            value={this.state.txtAge}
            onChangeText={txtAge => {
              this.setState({txtAge});
            }}
          />
        </Item>
        <Button success style={Styles.btnStyle} onPress={this.fireHandler}>
          <Text>Add Student</Text>
        </Button>
      </Form>
    );
  }
}
const Styles = StyleSheet.create({
  btnStyle: {
    alignSelf: 'center',
    marginTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
