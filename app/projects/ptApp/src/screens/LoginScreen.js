import React from 'react'
import { ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text, View } from 'react-native'


export const LoginScreen = ({ navigation }) => {

    return (
          <ScrollView style={styles.main}>
              <View style={styles.logo_block}>
                <Image
                    style={styles.logo_img}
                    source={require('../img/logo.png')}
                />
              </View >
            <TextInput
                style={styles.input}
                placeholder = 'Номер телефону'
                defaultValue = '+38'
                placeholderTextColor = '#9b9b9b'
                underlineColorAndroid = '#333'
                autoCapitalize = 'none'
            />
            <TextInput
               style={styles.input}
               placeholder = 'Пароль'
               placeholderTextColor = '#9b9b9b'
               underlineColorAndroid = '#333'
               autoCapitalize = 'none'
               secureTextEntry = {true}
            />
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('HomeStack')
                }
            >
                <Text style={styles.button}>УВІЙТИ</Text>
            </TouchableOpacity>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 30,
        backgroundColor: '#fafafa',
    },
    logo_block: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 50
    },
    logo_img: {
        height: 35,
        resizeMode: 'center',
    },
    input: {
        fontSize: 16,
        height: 55,
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    button: {
        flex: 1,
        backgroundColor: '#009fe3',
        color: '#fff',
        padding: 15,
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 3,
        marginTop: 30
    }
})