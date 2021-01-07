import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import styles from'./styles'
import Fontisto from'react-native-vector-icons/Fontisto' 
import { useNavigation } from '@react-navigation/native'

const SearchBar = (props) => {
    const {searchContent} = props;
    const navigator = useNavigation();
    return (
        <>
        <Pressable 
        style={styles.searchButton}
        onPress={()=>{
            navigator.navigate('Result')
        }}
        >
            <Fontisto name="search" size={25} color={'#f15454'} />
            <Text style={styles.buttonText}>{searchContent}</Text>
        
        </Pressable>
        </>
    )
}

export default SearchBar

