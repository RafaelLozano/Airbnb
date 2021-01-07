import React from 'react'
import { View, Text, ImageBackground, Pressable} from 'react-native'
import Button from '../../components/Button/index'
import SearchBar from '../../components/SearchBar/SearchBar'
//styles
import styles from './styles'

const HomeScreen = ({navigation}) => {
    return (
        <>
            <View style={styles.mainContainer}>
            {/* serach bar*/}
            <SearchBar searchContent="Where are you going?"/>
            
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                {/* Tittle */}

                <Text style={styles.tittle}>Go Near</Text>


                {/*Botton */}
                <Button content="Explore nearby stays"/>
    
            </ImageBackground>
        </View>
        </>
    )
}

export default HomeScreen
