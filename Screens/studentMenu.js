import React from 'react';
import {View,Text,Image,Button, TextInput} from 'react-native';

function studentMenu(props){
    return(   
        <View style={{backgroundColor: 'white', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>MK College</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> An investment in knowledge pays the best interest</Text>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>Options</Text>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("Profile")} title="Create your Profile"/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("companiesList")} title="List of companies posted for vacancy"/>
        </View>
        </View>
    )
}

export default studentMenu;