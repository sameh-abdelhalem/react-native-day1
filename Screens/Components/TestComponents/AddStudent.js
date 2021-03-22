import React from 'react'
import { TextInput, View, Alert,Text, StyleSheet, TouchableHighlight,Modal } from 'react-native'


export default class AddStudent extends React.Component {
    state = {
        txtName: '',
        txtAge: '',
        txtAddress: '',
        txtId: '',
        modalVisible:false
    }
    changaeInputs = (e) => {
        console.log(e.target.value);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Student</Text>
                <View style={styles.inputs}>
                    <Text>ID</Text>
                    <TextInput value={this.state.txtId}
                        // onChangeText={(e)=>this.changaeInputs(e)}
                        onChangeText={(txtId) => this.setState({ txtId })}

                        keyboardType="email-address" />
                </View>
                <View style={styles.inputs}>
                    <Text>Name</Text>
                    <TextInput
                        placeholder='AddName'
                        multiline={true}
                        numberOfLines={10}
                        inlineImageLeft='search_icon'
                        style={{ fontSize: 20, color: 'green' }}
                    />
                </View>
                <View style={styles.inputs}>
                    <TouchableHighlight activeOpacity={0.4}
                        underlayColor="#DDDDDD"
                        onPress={() => {
                            alert('Pressed!');
                            console.log("pressed");
                        }}>
                        <View style={{ backgroundColor: '#fff' }}>
                            <Text>My Component</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputs}>
                   
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

    },
    inputs: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightyellow'
    }
})