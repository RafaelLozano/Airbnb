import React from 'react'
import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from'@react-navigation/material-top-tabs'
import SearchResultPage from'../screens/SearchResults/SearchResultPage'
const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'#f15454',
            indicatorStyle:{
                backgroundColor:'#f15454'
            }
        }}  >
            <Tab.Screen name={"List"} component={SearchResultPage} />
            <Tab.Screen name={"Map"} component={SearchResultPage} />
        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
