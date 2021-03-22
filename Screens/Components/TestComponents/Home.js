import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image,ScrollView, ImageBackground } from 'react-native'
import Students from './Data'
import AddCom from './AddCom'
export default class List extends React.Component {
    state = {
        StudentData: Students,
        txtName: ''
    }
    AddnewStd = (newStd) => {

        this.state.StudentData.push(newStd);
        this.setState({
            StudentData: this.state.StudentData
        })
    }
    removeFromlist = (index) => {
        console.log(index);
        
        this.state.StudentData.splice(index,1);
        console.log(this.state.StudentData);
        this.setState({
            StudentData:this.state.StudentData
        })
    }
    render() {
        return (
            <View style={Styles.container}>
                <ImageBackground source={require("../images/1.jpg")} style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center"
                }}>
                    <Text>Inside</Text>

                </ImageBackground>
                {this.state.StudentData.map((std, i) => {
                    return (
                        <View style={Styles.TextView} key={std.Id}>
                            <Text>
                                StdName:{std.Name} and StdAddress:{std.Address}
                                <Button title="Remove from the list" onPress={() => this.removeFromlist(i)} />
                            </Text>

                        </View>
                        
                    )
                })}
                <View>
                    <AddCom AddnewStudent={this.AddnewStd} />
                </View>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // backgroundColor: 'lightgreen'
    },
    TextView: {
        flex: 0.5,
        color: 'red',
        fontSize: 20,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        padding: 2,
        margin: 5,
        width:300,
        height:80

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    }
})