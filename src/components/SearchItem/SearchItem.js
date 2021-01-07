import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from'@react-navigation/native'

const SearchItem = (props) => {
    const {place} = props;
    const navigator = useNavigation();
    return (
        <Pressable style={styles.mainContainer} onPress={()=> navigator.navigate('check')}>
            <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={30} color={'black'} />
            </View>
            <Text style={styles.descriptionText}>{place.description}</Text>
        </Pressable>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1,
        paddingVertical:15,
    },
    iconContainer:{
        padding:7,
        marginRight:15,
        backgroundColor:'#e7e7e7',
        borderRadius:10,

    },
    descriptionText:{
        fontSize:16
    },
})
