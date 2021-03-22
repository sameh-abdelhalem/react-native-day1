import React, { Component } from 'react';
import { Container, Header, Button, Icon, Content, Form, Text, Item, Input, Label } from 'native-base';
import { View } from 'react-native';
export default class AddForm extends Component {
    render() {
        return (
            <View>
                <Button iconLeft light>
                    <Icon name='cog' />
                    <Text>Settings</Text>
                </Button>
                <Button full light>
                    <Text>Light</Text>
                </Button>
                <Button full>
                    <Text>Primary</Text>
                </Button>
                <Button full success>
                    <Text>Success</Text>
                </Button>
                <Button full info>
                    <Text>Info</Text>
                </Button>
                <Button full warning>
                    <Text>Warning</Text>
                </Button>
                <Button full danger>
                    <Text>Danger</Text>
                </Button>
                <Button full dark>
                    <Text>Dark</Text>
                </Button>
                <Button iconLeft light>
                    <Icon name='arrow-back' />
                    <Text>Back</Text>
                </Button>
            </View>

        );
    }
}