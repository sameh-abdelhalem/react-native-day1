import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import Students from './Data';
export default class ListBase extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {Students.map((std, i) => {
                            return (
                                <ListItem avatar key={i}>
                                    <Left>
                                    <Thumbnail source={require("../images/1.jpg" )} />
                                    </Left>
                                    <Body>
                                        <Text>{std.Name}</Text>
                                        <Text note>{std.Address}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{std.Age}</Text>
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}