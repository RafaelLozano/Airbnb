import React from'react'
import {View,Text} from'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultPage from '../screens/SearchResults/SearchResultPage';
import GuestsScreen from '../screens/GuestsScreen/GuestsScreen';
import DestinationSearchScreen from '../screens/DestinationSearchScreen/DestinationSearchScreen';
import TabNavigator from './TabNavigator/TabNavigator';



const Stack = createStackNavigator();

 const Router = () => {
     return (
         
         <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen
                 name={"Home"}
                 component={TabNavigator}
                 options={{
                     headerShown:false,
                 }}
                 
                 />
                 <Stack.Screen
                 name={"Result"}
                 component={DestinationSearchScreen}
                 />

                 <Stack.Screen
                 name={"check"}
                 component={GuestsScreen}
                 />
                
             </Stack.Navigator>
         </NavigationContainer>
        
         
     )
 }
 
 export default Router
 