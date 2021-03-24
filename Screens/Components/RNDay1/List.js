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
  Spinner,
} from 'native-base';
import {StyleSheet, View} from 'react-native';

export default class StudentList extends Component {
  // state
  state = {
    StdArray: [],
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
  getServerData = () => {
    fetch('http://localhost:3000/Students')
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    fetch('http://ccfa81f662db.ngrok.io/Students')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({StdArray: responseJson});
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  deleteStudent = i => {
    this.state.StdArray.splice(i, 1);
    this.setState({
      StdArray: this.state.StdArray,
    });
  };
  render() {
    if (this.state.StdArray.length === 0) {
      return (
        <Container>
          <Header />
          <Content>
            <Spinner color="blue" />
          </Content>
        </Container>
      );
    } else {
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
