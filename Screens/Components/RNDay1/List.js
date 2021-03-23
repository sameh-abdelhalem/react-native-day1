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

  // methods

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
                    <Button success>
                      <Text>Edit</Text>
                    </Button>
                    <Button danger>
                      <Text>Delete</Text>
                    </Button>
                  </View>
                </View>
              );
            })}
            <AddComponent customHandler={this.addHandler} />
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
});
