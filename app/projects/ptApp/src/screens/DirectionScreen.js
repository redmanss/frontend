import React, {useEffect, useState, useCallback} from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View, ActivityIndicator, FlatList, LogBox } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const DirectionScreen = ({navigation, route}) => {

    let directionId = route.params.item.id

    const loadApi = useCallback(async () => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        fetch(`https://pack-trade.com/application/direction-section?id=${directionId}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
     })
   
     useEffect(() => {
       loadApi()
     }, [])

    const [isLoading, setLoading] = useState(true);
    const [dataState, setData] = useState([]);

    const paddingTop = () => {
        if (Platform.OS === "ios") {
          return 70
        } else {
          return 110
        }
      }

    return (
        <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
            <View style={{paddingTop: paddingTop()}}></View>
            <ScrollView>
                <View style={styles.scrollview}>
                    <View></View>
                    {isLoading ? <ActivityIndicator style={styles.activity} size="large" color="#009fe3"/> : (
                            <View>
                                <FlatList
                                    data={dataState}
                                    keyExtractor={section => section.id.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                
                                            onPress={
                                                () => navigation.navigate('CategoryScreenStack', {item})
                                            }
                                            style={styles.blockDirection}
                                        >
                                            <Text style={styles.blocktext}>{item.name_ua}</Text>
                                            <Ionicons style={styles.blocktexticon} name="ios-arrow-forward" size={21} color="#99a7a8" />
                                        </TouchableOpacity>
                                    )}
                                />                       
                            </View>
                        )}
                </View>
            </ScrollView>
        </SafeAreaView>  
    )

}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 30,
        backgroundColor: '#f0f4f5',
    },
    mainblock: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    blockDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 3,
        borderRadius: 10
    },
    blocktext: {
        flex: 1,
        color: '#2e3e51',
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
        paddingRight: 10,
    },
    blocktexticon: {
        width: 21,
    },
    h1block: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    h1: {
        fontSize: 19,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 20,
        marginTop: 30,
        color: '#37495f',
        marginLeft: 10
    },
    hr: {
        height: 2,
        backgroundColor: '#f0f4f5',
        width: '100%'
    },
})