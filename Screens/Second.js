import React from 'react';
import {View,Text,Image,Button, TextInput} from 'react-native';

function Second(props){
    return(
        <View style={{backgroundColor: 'white', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>MK College</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> An investment in knowledge pays the best interest</Text>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>Admin Login</Text>
        <View style={{marginTop: 10, paddingVertical: 5, textAlign: 'center', alignItems: 'center', borderWidth: 1, borderColor: "grey", width: "100%"}}>
            <TextInput placeholder='User Name'/>
        </View>
        <View style={{marginTop: 5, marginBottom: 5, paddingVertical: 5, textAlign: 'center', alignItems: 'center', borderWidth: 1, borderColor: "grey", width: "100%"}}>
            <TextInput secureTextEntry={true} placeholder='password'/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("Main")} title="Login"/>
        </View>
        </View>
    )
}

export default Second;