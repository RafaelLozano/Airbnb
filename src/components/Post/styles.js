import {StyleSheet} from'react-native'
const styles = StyleSheet.create({
    mainContainer:{
        margin:20,
    },
    image:{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10,
    },
    prices:{
        fontSize:18,
    },
    oldPrice:{
        color:'gray',
        textDecorationLine:'line-through',

    },
    newPrice:{
        fontWeight:'bold',
    },
    totalPrice:{
        color:'gray',
        textDecorationLine:'underline',
    },
    description:{
        fontSize:18,
        lineHeight:30
    },
    bedrooms:{
        marginVertical:10,
        color:'gray'
    }
})
export default styles;