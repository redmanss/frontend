import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const ListProducts = ({post, onOpen}) => {

    return (
        <TouchableOpacity
            onPress={() => onOpen(post)}
            style={styles.blockitem}
        >
            <Text>{post.inventory} : {post.name}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    blockitem: {
        paddingHorizontal: 13,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
    }
})