import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, TouchableOpacity, LogBox, Image } from 'react-native'

export const SearchScreen = ({navigation}) => {

  const loadApi = useCallback(async () => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    fetch('https://pack-trade.com/application/product-all')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson)
        setMasterDataSource(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false))
 })

 useEffect(() => {
   loadApi()
 }, [])

  
  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])
  //console.log(masterDataSource)
  return (
    <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
      {isLoading ? <ActivityIndicator style={styles.activity} size="large" color="#009fe3"/> : (
      <View style={styles.scrollview}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => {

            if (text) {
                const newData = masterDataSource.filter(function (item) {
                  const itemData = `${item.name_ua.toLowerCase()}`
                  const textData = text.toLowerCase()
                  
                  return itemData.indexOf(textData) > -1
              })
              setFilteredDataSource(newData)
              setSearch(text)
            } else {
              setFilteredDataSource(masterDataSource)
              setSearch(text)
            }
          }}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Пошук..."
        />
          <FlatList
            data={filteredDataSource}
            keyExtractor={section => section.id.toString()}
            renderItem={({ item }) => {

                const statusProduct = () => {
                    if (item.price_sale > 0) {
                        return <View style={styles.statusProduct}><Text style={styles.statuText}>Акція</Text></View>
                    }
                    if (item.present > 0) {
                        return <View style={styles.statusProduct}><Text style={styles.statuText}>Подарунок</Text></View>
                    }
                }
                
                const price = () => {

                    const priceCurrency = () => {
                        if (item.price_currency > 0) {
                            return <Text>({item.price_currency} {item.currency_icon})</Text>
                        }
                    }
                    const priceCurrencySale = () => {
                        if (item.price_currency > 0) {
                            return <Text>({item.price_currency_sale} {item.currency_icon})</Text>
                        }
                    }

                    if (item.price_sale > 0) {
                        
                        return (
                            <View>
                                <Text style={{textDecorationLine: 'line-through', fontSize: 12}}>{item.price} грн {priceCurrency()}</Text>
                                <Text style={styles.boldText}>{item.price_sale} грн {priceCurrencySale()}</Text>
                            </View>
                        )
                    } else {
                        return (
                            <View>
                                <Text style={styles.boldText}>{item.price} грн {priceCurrency()}</Text>
                            </View>
                        )
                    }
                }

                return (
                    <TouchableOpacity
                        style={styles.blockDirection}
                        onPress={
                            () => navigation.navigate('ProductScreenStack', {item})
                        }
                    >
                        <View style={styles.flexbox}>
                            {statusProduct()}
                            <Image
                                style={styles.image}
                                source={{ uri: item.image}}
                            />
                            <View style={{flex: 1}}>
                                <Text style={{marginBottom: 5}}>{item.name_ua}</Text>
                                <Text style={styles.boldText}>{price()}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
                />
            
      </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
image: {
    width: 80,
    height: 53,
    marginRight: 10,
    borderRadius: 5,
  },
  scrollview: {
    flex: 1,
      paddingHorizontal: 10,
      paddingBottom: 10,
      paddingTop: 50,
      backgroundColor: '#f0f4f5',
  },
  activity: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 10
  },
  blockitem: {
    paddingHorizontal: 13,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
  },
  boldText: {
    fontWeight: '700',
  },
  statusProduct: {
    backgroundColor: '#e6334c',
    paddingVertical: 3,
    paddingHorizontal: 5,
    position: 'absolute',
    zIndex: 1,
    top: -15,
    left: -13,
    borderRadius: 3
},
  statuText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold'
  },
  blockDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 3,
    borderRadius: 10
},
});
