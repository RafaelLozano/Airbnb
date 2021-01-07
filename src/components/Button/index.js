import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles'
const Button = (props) => {
     const content = props.content;
    return (
        <>
            <Pressable style={styles.button} onPress={() => {
                console.warn('Presiono el boton');
            }}>
                <Text styles={styles.buttonText}>{content}</Text>
            </Pressable>
        </>
    )
}

export default Button

