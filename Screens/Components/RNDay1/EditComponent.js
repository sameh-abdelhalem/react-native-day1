/* eslint-disable prettier/prettier */
import {Button, Form, Input, Item, Text} from 'native-base';
import React from 'react';
export default class EditComponent extends React.Component {
  state = {
    txtName: this.props.route.params.student.txtName,
    txtAge: `${this.props.route.params.student.txtAge}`,
  };
  fireHandler = () => {
    const newStd = {
      Id: 4,
      Name: this.state.txtName,
      Age: this.state.txtAge,
      Address: 'ABC Alex',
    };
    this.props.route.params.editHandler(
      newStd,
      this.props.route.params.student.index,
    );
    this.props.navigation.navigate('Home');
  };
  render() {
    console.log(this.props.route);
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
        <Button
          success
          onPress={this.fireHandler}
          style={this.props.route.params.style}>
          <Text>Edit Student</Text>
        </Button>
      </Form>
    );
  }
}
