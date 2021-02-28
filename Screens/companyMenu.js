import React from 'react';
import {View,Text,Image,Button, TextInput} from 'react-native';

function companyMenu(props){
    return(   
        <View style={{backgroundColor: 'white', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>MK College</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> An investment in knowledge pays the best interest</Text>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>Options</Text>
        <View style={{margin: 2}}>
        <Button title="List of college students"/>
        </View>
        <View style={{margin: 2}}>
        <Button title="College student's resume"/>
        </View>
        </View>
    )
}

export default companyMenu;