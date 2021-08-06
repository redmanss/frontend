import React, {useEffect, useState, useCallback} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View, ActivityIndicator, FlatList, LogBox, Modal } from 'react-native'
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'


export const HomeScreen = ({ navigation }) => {

    const loadApi = useCallback( async () => {
         LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
          await fetch('https://pack-trade.com/application/section-all')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false))
      })
    
      useEffect(() => {
        loadApi()
      }, [])

    const [isLoading, setLoading] = useState(true);
    const [stateNoticeModal, setNoticeModal] = useState(false)
    const [stateDownloadModal, setDownloadModal] = useState(false)
    const [dataState, setData] = useState([])

    const paddingModalTop = () => {
        if (Platform.OS === "ios") {
          return 40
        } else {
          return 20
        }
      }

    //console.log(dataState)
   
    return (
          <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
              <ScrollView style={styles.scrollview}> 
                <View style={styles.logoblock}>
                    <Image
                        style={styles.logo_img}
                        source={require('../img/packlogo.png')}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{padding: 10}}
                            onPress={
                                () => {
                                    setNoticeModal(true)
                                }
                            }
                        >
                            <Ionicons name="ios-notifications-outline" size={25} color="#37495f" />
                            <View style={styles.noticeQuantity}>
                                <Text style={{color: '#fff', fontSize: 10}}>0</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{padding: 10, marginLeft: 10}}
                            onPress={
                                () => {
                                    setDownloadModal(true)
                                }
                            }
                        >
                            <Ionicons name="download-outline" size={25} color="#37495f" />
                        </TouchableOpacity>
                    </View>
                </View>
                {isLoading ? <ActivityIndicator style={styles.activity} size="large" color="#009fe3"/> : (
                    <FlatList
                        ListHeaderComponent={() => {
                                return (
                                    <View>
                                        <View style={styles.priceblock}>
                                            <Text style={{fontSize: 12}}>Останнє оновлення: {dataState.currency.date}</Text>
                                            <View style={styles.priceitemblock}>
                                                <View style={styles.priceitem}><FontAwesome name="dollar" size={16} color="#333" /><Text style={{marginLeft: 5}}>- {dataState.currency.dollar} грн</Text></View>
                                                <View style={styles.priceitem}><FontAwesome name="euro" size={16} color="#333" /><Text style={{marginLeft: 5}}>- {dataState.currency.euro} грн</Text></View>
                                            </View>
                                        </View>
                                        <View style={styles.h1block}>
                                            <Feather name="file-text" size={22} color="#009fe3" />
                                            <Text style={styles.h1}>Прайс-листи</Text>
                                        </View>
                                    </View>
                                    )
                            }
                        }
                        data={dataState.section}
                        keyExtractor={section => section.id.toString()}
                        renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navigation.navigate('DirectionScreenStack', {item})
                                        }
                                    }
                                    style={styles.blockDirection}
                                >
                                    <Text style={styles.blocktext}>{item.name_ua}</Text>
                                    <Ionicons style={styles.blocktexticon} name="ios-arrow-forward" size={21} color="#99a7a8" />
                                </TouchableOpacity>
                        )}
                        ListFooterComponent={()=>{
                            return (
                                <View style={{marginBottom: 30}}>
                                    <View style={styles.h1block}>
                                        <MaterialCommunityIcons name="sale" size={22} color="#009fe3" />
                                        <Text style={styles.h1}>Акційні позиції</Text>
                                    </View>
                                        <TouchableOpacity
                                            onPress={
                                                () => {
                                                    navigation.navigate('SaleScreenStack')
                                                }
                                            }
                                            style={styles.blockDirection}
                                        >
                                            <Text style={styles.blocktext}>Всі акційні позиції</Text>
                                            <Ionicons style={styles.blocktexticon} name="ios-arrow-forward" size={21} color="#99a7a8" />
                                        </TouchableOpacity>
                                </View>
                            )
                        }}
                    />                       
                )}
                
                <Modal visible={stateNoticeModal} onRequestClose={() => {setNoticeModal(false)}} animationType="slide">
                    <TouchableOpacity style={{position: 'absolute', right: 10, zIndex: 1000,top: paddingModalTop(), padding: 10}}
                        onPress={()=> {setNoticeModal(false)}} 
                    >
                        <Ionicons name="md-close" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                        <Text style={{marginTop: 100, marginLeft: 20}}>Оповіщення. В розробці</Text>
                    </View>
                </Modal>

                <Modal visible={stateDownloadModal} onRequestClose={() => {setDownloadModal(false)}} animationType="slide">
                    <TouchableOpacity style={{position: 'absolute', right: 10, zIndex: 1000,top: paddingModalTop(), padding: 10}}
                        onPress={()=> {setDownloadModal(false)}} 
                    >
                        <Ionicons name="md-close" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                        <Text style={{marginTop: 100, marginLeft: 20}}>Файли для скачування. В розробці</Text>
                    </View>
                </Modal>
              </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    noticeQuantity: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        backgroundColor: '#009fe3',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 50,
    },
    priceitemblock: {
        flexDirection: 'row',
        marginTop: 10,
    },
    priceitem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#bce4fa',
        padding: 10,
        borderRadius: 8
    },
    priceblock: {
        marginBottom: 20,
    },
    scrollview: {
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
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    blocktext: {
        flex: 1,
        color: '#2e3e51',
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
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
    inwork: {
        opacity: 0.5,
    },
    logoblock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    logo_img: {
        width: 198,
        resizeMode: 'cover',
        height: 30,
        marginTop: 60,
    },
})