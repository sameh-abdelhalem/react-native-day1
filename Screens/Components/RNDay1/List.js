/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  Item,
  Input,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import Students from '../../Data/StudentData';
export default class StudentList extends Component {
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
  // AddnewElement() {
  //     console.log(this);
  //     console.log(this.state.StdArray)
  // }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.state.StdArray.map((std, i) => {
              return (
                <ListItem thumbnail key={i}>
                  <Left>
                    <Thumbnail square source={require('../images/1.jpg')} />
                  </Left>
                  <Body>
                    <Text>{std.Id}</Text>
                    <Text note numberOfLines={1}>
                      {std.Name}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>{std.Address}</Text>
                    </Button>
                  </Right>
                </ListItem>
              );
            })}
          </List>
          <Form>
            <Item>
              <Input
                keyboardType="default"
                placeholder="Username"
                value={this.state.txtName}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Age"
                keyboardType="numeric"
                value={this.state.txtAge}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
