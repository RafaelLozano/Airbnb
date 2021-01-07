import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from'@react-navigation/stack'
import HomeScreen from'../screens/Home/index'
import  SearchResultPage  from '../screens/SearchResults/SearchResultPage'
const Stack = createStackNavigator();

const ExploreNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={"Welcome"}
                component={HomeScreen}
                options={{
                    headerShown:false,
                }}
            />
            <Stack.Screen
                name={"searchResult"}
                component={SearchResultPage}
                options={{
                    title:'Search your destination'
                }}
            />
        </Stack.Navigator>
       
    )
}

export default ExploreNavigation
