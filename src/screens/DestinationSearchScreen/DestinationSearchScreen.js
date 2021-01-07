import React, {useState} from 'react'
import { View, Text, TextInput, FlatList} from 'react-native'
import styles from './styles'
import searchResult from'../../../assets/data/search'
import SearchItem from '../../components/SearchItem/SearchItem'
import {useNavigation} from'@react-navigation/native'
const DestinationSearchScreen = () => {
    const  {inputText, setInputText} = useState('');
    return (
        <View style={styles.mainContainer}>
            {/* input component */}
            <TextInput style={styles.textInput}
            placeholder="Where are you going?"
            value={inputText}
            onChangeText={setInputText}
            />
           {/* List od destinations */}
           <FlatList
           data={searchResult}
           renderItem={({item})=><SearchItem place={item}/>}
           />


           

        </View>
    )
}

export default DestinationSearchScreen
