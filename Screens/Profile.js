import React from 'react';
import {View,Text,Image,Button, TextInput} from 'react-native';

function Profile(props){
    return(   
        <View style={{backgroundColor: 'white', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>MK College</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> An investment in knowledge pays the best interest</Text>
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='User Name:' />
        <TextInput secureTextEntry={true} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Password:' />
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='Gender:' />
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='Class:' />
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='Roll Number:' />
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='Total Marks:' />
        <TextInput style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='Grade:' />
        <View style={{margin: 2}}>
        <Button title="Upload photo"/>
        </View>
        <View style={{margin: 2}}>
        <Button title="Upload Resume"/>
        </View>
        </View>
    )
}

export default Profile;