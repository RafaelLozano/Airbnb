
import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'grey',
        top:10,
        paddingTop:20,
        paddingBottom:20
        
    },
    buttonContainer:
    {
        flexDirection:'row',
        
    },
    titleContainer:{
        fontSize:20
    },
    titleText:{
        fontSize:16,
        fontWeight:'bold'
    },
    subTitleText:{
        fontSize:16,
        color:'grey',
    },
    button:{
        borderWidth:1,
        height:30,
        width:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'grey',
    },
    buttonContainer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        
    },
    valueText:{
        marginHorizontal:20,
        fontSize:18
    }
})

export default styles