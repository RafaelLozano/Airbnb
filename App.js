/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from'react-native-vector-icons/Entypo';
import HomeScreen from'./src/screens/Home/index'
import Post from'./src/components/Post/Post'
import SearchResultPage from'./src/screens/SearchResults/SearchResultPage'
import Router from'./src/navigation/Router'

import Feed from'./assets/data/feed'
import feed from './assets/data/feed';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen/DestinationSearchScreen'
import GuestsScreen from './src/screens/GuestsScreen/GuestsScreen';

const post1 = feed[0];
const post2 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* {<HomeScreen/>} */}
        {/* <Post post={post1}/> */}
        {/* <Post post={post2}/> */}
        {/* <SearchResultPage/> */}
        
        

      {/* </SafeAreaView>  */}
      <Router></Router>
      
      
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer:{
    
    top:'5%'
  }
})

export default App;
