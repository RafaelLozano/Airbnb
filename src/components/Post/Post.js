import React from 'react'
import {Text, View, Image} from 'react-native'
import styles from'./styles'
const Post = (props) => {
    const post = props.post;
    //console.log(props);//debug ctrl+comand+Z -> debug -> F12
    return (
        <>
        <View style={styles.mainContainer}>
            {/* Image */}
            <Image 
            source={{uri:post.image }}
            style={styles.image}
            />

            {/* Bed & Bedrooms */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}.{post.title}
            </Text>

            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
                <Text style={styles.prices}> /NIGHT</Text>

            </Text>

            {/* total price */}
            <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        
        </View>
        </>
    )
}

export default Post

