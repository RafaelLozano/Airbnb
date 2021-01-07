import React, {useState} from 'react'
import {Text, View, Pressable,} from 'react-native'
import styles from './styles';

const GuestsScreen = ({navigation}) => {
    const [adults,setAdults] = useState(0);//valor inicial 
    const [children,setChildren] = useState(0);
    const [infants,setInfants] = useState(0);
    return (
        <View style={{justifyContent:'space-between', height:'100%'}}>
            <View>
                {/* ROW 1 */}
                <View style={styles.row}>
                    {/* Tittle */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Adult</Text>
                        <Text style={styles.subTitleText}>Ages 13 or above</Text>
                    </View>
                    
                    {/* Button with value */}
                    <View style={styles.buttonContainer}>
                        {/* Boton - */}
                        <Pressable 
                            onPress={() => adults>0? setAdults(adults - 1):console.warn('')}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.valueText}>{adults}</Text>
                        {/* Boton + */}
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color:'grey' }}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* ROW Children */}
                <View style={styles.row}>
                    {/* Tittle */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Children</Text>
                        <Text style={styles.subTitleText}>Ages 2-12</Text>
                    </View>

                    {/* Button with value */}
                    <View style={styles.buttonContainer}>
                        {/* Boton - */}
                        <Pressable
                            onPress={() => children > 0 ? setChildren(children - 1) : console.warn('')}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.valueText}>{children}</Text>
                        {/* Boton + */}
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* ROW infants */}
                <View style={styles.row}>
                    {/* Tittle */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Infants</Text>
                        <Text style={styles.subTitleText}>Under 2</Text>
                    </View>

                    {/* Button with value */}
                    <View style={styles.buttonContainer}>
                        {/* Boton - */}
                        <Pressable
                            onPress={() => infants > 0 ? setInfants(infants - 1) : console.warn('')}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.valueText}>{infants}</Text>
                        {/* Boton + */}
                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
        
            </View>

           <View style={{paddingHorizontal:20}}>
                <Pressable style={{backgroundColor:'#f15454', marginBottom:20,height:50,width:'100%',borderRadius:10,justifyContent:'center',alignItems:'center'}}
                         onPress={()=>
                            navigation.navigate('Home',{
                                screen: 'Explore',params:{
                                    screen:'searchResult'
                                }
                            })
                             
                         }
                         >
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Search</Text>
                </Pressable>
           </View>
            

        </View>

    )
}

export default GuestsScreen


