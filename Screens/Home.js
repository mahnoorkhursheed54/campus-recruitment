import React from 'react';
import {View,Text,Image,Button} from 'react-native';

function Home(props){
    return(
        <View style={{backgroundColor: 'white', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 31, alignItems:'center', textAlign:'center', color: 'black'}}>MK College</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> An investment in knowledge pays the best interest</Text>
        <Image 
            source={require('../Assets/grad.png')} 
            style = {{width: 360, height: 200}}
        />
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("First")} title="Student"/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("Second")} title="Administrator"/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("Third")} title="Company"/>
        </View>
        </View>
    )
}

export default Home;