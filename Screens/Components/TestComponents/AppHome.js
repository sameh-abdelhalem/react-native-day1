import React from 'react';
import { View, Text, TextInput } from 'react-native';
import AddStudent from './AddStudent';
import AddForm from './AddBase'
import List from './Home'
import ListBase from './ListwithBase'
import ListIcon from './SettingIcone'
import DatePickerExample from './datePicker'

export default class AppHome extends React.Component {
    render() {
        return (
            <>
                {/* <List/> */}
                {/* <DatePickerExample/> */}
                <ListIcon/>
                <ListBase />
            </>
            // <View>
            //     <Text>
            //         Home Component
            //     </Text>
            //     {/* <AddStudent/> */}
            //     <View>
            //         <AddForm />
            //     </View>

            // </View>
        )
    }
}