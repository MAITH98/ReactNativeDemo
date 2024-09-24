import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import QRScreen from './screens/QrGeneratorScreen';
import TodoScreen from './screens/ToDoScreen/TodoScreen';

//Screen Names
const homeName = 'Home';
const qrName = 'QR Generator';
const todoName = 'TODO List';

const Tab = createBottomTabNavigator();


export default function MainContainer(){

    return(
    <NavigationContainer> 
        <Tab.Navigator
            initialRouteName = {homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    
                    if(rn === homeName){
                        iconName = focused? 'home' : 'home-outline'
                    } else if(rn === qrName){
                        iconName = focused? 'qr-code' : 'qr-code-outline'
                    }
                    else if(rn === todoName){
                        iconName = todoName? 'list' : 'list-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={qrName} component={QRScreen} />
                <Tab.Screen name={todoName} component={TodoScreen} />


        </Tab.Navigator>
    </NavigationContainer> 
    );


}