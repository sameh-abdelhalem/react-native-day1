import React from 'react'
import { View, TextInput, Text, Image, Alert, StyleSheet,Button } from 'react-native';
export default class AddCom extends React.Component {
    state = {
        txtName: ''
    }
    newStd = () => {
        Alert.alert("Add from seperate Add Component");
        console.log("TextAdd from seperate add component");
        var newStd = {
            id: 4,
            Name: this.state.txtName,
            Age: 38,
            Address: 'Text'
        }
        this.props.AddnewStudent(newStd);
    }
    render() {
        return (
            <View>
                <Image source={require('../images/1.jpg')} style={{ width: 20, height: 20 }} />
                <Text>StudentName</Text>
                <TextInput style={Styles.input}
                    placeholder="useless placeholder"
                    value={this.state.txtName}
                    onChangeText={(txtName) => this.setState({ txtName })} />
                
                <Button onPress={this.newStd}
                    title="Add new Student"
                    color="#841584" />
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    }
})