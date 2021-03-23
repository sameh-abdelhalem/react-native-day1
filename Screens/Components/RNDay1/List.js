/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import Students from '../../Data/StudentData';
import {StyleSheet, View} from 'react-native';
import AddComponent from './AddComponent';

export default class StudentList extends Component {
  // state
  state = {
    StdArray: Students,
  };

  // handlers
  addHandler = param => {
    this.state.StdArray.push(param);
    // //rerender comp and apply VDM
    this.setState({
      StdArray: this.state.StdArray,
    });
  };
  editHandler = (studentObj, index) => {
    this.state.StdArray.splice(index, 0, studentObj);

    this.setState({
      StdArray: this.state.StdArray,
    });
    this.deleteStudent(index + 1);
  };

  // methods
  deleteStudent = i => {
    this.state.StdArray.splice(i, 1);
    this.setState({
      StdArray: this.state.StdArray,
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.state.StdArray.map((std, i) => {
              return (
                <View key={i}>
                  <ListItem thumbnail style={Styles.listStyle}>
                    <Left>
                      <Thumbnail square source={require('../images/1.jpg')} />
                    </Left>
                    <Body>
                      <Text>{std.Name}</Text>
                      <Text note numberOfLines={1}>
                        {std.Age}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>{std.Address}</Text>
                      </Button>
                    </Right>
                  </ListItem>
                  <View style={Styles.formContainer}>
                    <Button
                      success
                      onPress={() =>
                        this.props.navigation.navigate('EditStudent', {
                          student: {
                            txtName: std.Name,
                            txtAge: std.Age,
                            index: i,
                          },
                          editHandler: this.editHandler,
                          style: Styles.btnStyle,
                        })
                      }>
                      <Text>Edit</Text>
                    </Button>
                    <Button danger onPress={() => this.deleteStudent(i)}>
                      <Text>Delete</Text>
                    </Button>
                  </View>
                </View>
              );
            })}
            {/* <AddComponent customHandler={this.addHandler} /> */}
            <Button
              success
              style={Styles.btnStyle}
              onPress={() =>
                this.props.navigation.navigate('AddStudent', {
                  customHandler: this.addHandler,
                })
              }>
              <Text>Add Student</Text>
            </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
// styling
const Styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
