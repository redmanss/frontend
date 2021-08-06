import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, Alert, TextInput, SafeAreaView, ActivityIndicator, Linking } from "react-native"
import ImageViewer from 'react-native-image-zoom-viewer'
import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"
import * as FileSystem from 'expo-file-system'
import { Ionicons, SimpleLineIcons  } from '@expo/vector-icons'

export const ProductScreen = ({navigation, route}) => {

  const productId = route.params.item.id
  const loadApi = useCallback(async () => {

    await fetch(`https://pack-trade.com/application/product?id=${productId}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
  })

  useEffect(() => {
    loadApi()
  }, [])

  const [stateModal, setModal] = useState(false)
  const [stateIndexImage, setIndexImage] = useState(0)
  const [stateComModal, setComModal] = useState(false)
  const [stateLoadingModal, setLoadingModal] = useState(false)
  const [stateName, setName] = useState('-')
  const [statePhone, setPhone] = useState('-')
  const [statePrice, setPrice] = useState('-')
  const [stateNote, setNote] = useState('-')
  const [isLoading, setLoading] = useState(true);
  const [dataState, setData] = useState([]);
  const numList = 3
  
  const arrayImages = dataState.images

  //console.log(dataState)
  const createAndSavePDF = async () => {

    setLoadingModal(true)
    const htmlContent = () => {

      const pdfCharComponent = () => {
        if (dataState.characteristics.length == 0) {
          return ``
        } else {
           const pdfArrayChar = dataState.characteristics.map((item, index) => `<div class="ncpb-char-item">${item.name}</div>`)
           return pdfArrayChar
        }
      }
  
      const page = () => {
        if (Platform.OS === "ios") {
          return `margin: 0;`
        } else {
          return `margin: 10mm;`
        }
      }
  
      const pageMargin = () => {
        if (Platform.OS === "ios") {
          return `padding: 5mm;`
        } else {
          return `padding: 0;`
        }
      }
  
      const header = () => {
        if (Platform.OS === "ios") {
          return `font-size: 7pt;`
        } else {
          return `font-size: 10pt;`
        }
      }
  
      const font10 = () => {
        if (Platform.OS === "ios") {
          return `font-size: 6pt;`
        } else {
          return `font-size: 10pt;`
        }
      }
  
      const font11 = () => {
        if (Platform.OS === "ios") {
          return `font-size: 7pt;`
        } else {
          return `font-size: 11pt;`
        }
      }
  
      const font12 = () => {
        if (Platform.OS === "ios") {
          return `font-size: 9pt;`
        } else {
          return `font-size: 12pt;`
        }
      }
  
      const font14 = () => {
        if (Platform.OS === "ios") {
          return `font-size: 11pt;`
        } else {
          return `font-size: 14pt;`
        }
      }
  
      const font18 = () => {
        if (Platform.OS === "ios") {
          return `font-size: 15pt;`
        } else {
          return `font-size: 18pt;`
        }
      }
  
      return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Example PDF</title>
            <style>
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
                body {
                    margin: 0;
                    min-height: 100%;
                    overflow-x: hidden;
                    font-family: "Calibri", sans-serif;
                    ${font12()}
                    color: #333;
                }
                @page {
                  ${page()}
                }
                .n-com-pdf-block {
                  ${pageMargin()}
                }
                
                * {
                    box-sizing: border-box;
                }
                .ncpb-img-block2 {
                  display:flex;
                    margin-bottom: 5mm;
                  }
                  .ncpb-img-block2 div {
                    width: 33%;
                  }
                  .ncpb-img-block2 img {
                    width: 100%;
                  }
                  .img-margin2 {
                  margin-right: 2mm;
                  }
                  .ncpb-note, .ncpb-video {
                    break-inside: avoid;
                  }
                .ncpb-note {
                  margin-top: 5mm;
                  ${font10()}
                  }
                .ncpb-note-title, .ncpb-video-title {
                  font-weight: 700;
                  margin-bottom: 2mm;
                  }
                .ncpb-char-item {
                  ${font11()}
                  width: 50%;
                  border: 1pt solid #e5e5e5;
                  padding: 1mm;
                }
                .ncpb-char-block {
                  display: flex;
                  flex-wrap: wrap;
                  font-size: 0;
                }
                .ncpb-header, .ncpb-footer, .ncpb-img-block {
                  display: flex;
                }
                .ncpb-img-block img {
                  width: 100%;
                }
                .ncpb-header-img {
                  width: 41%;
                }
                .ncpb-main-img {
                  width: 67.5%;
                }
                .ncpb-sub-img {
                  width: 32.8%;
                }
                .blue-font {
                  color: #009fe3;
                }
                .ncpb-manager {
                  ${font11()}
                  text-align: right;
                  margin: 6mm 0 4mm;
                }
                .ncpb-info-block {
                  border-left: 0.5mm solid #009fe3;
                  margin-left: 6mm;
                  padding-left: 6mm;
                  ${header()}
                }
                .pers-manager {
                  color: #767171;
                }
                .name-phone {
                  font-weight: 700;
                }
                .ncpb-com {
                  ${font14()}
                }
                .ncpb-name {
                  ${font18()}
                  font-weight: 900;
                }
                .ncpb-inv {
                  color: #009fe3;
                }
                .ncpb-img-block {
                  font-size: 0;
                  margin: 5mm 0 2mm;
                }
                .ncpb-main-img {
                  margin-right: 2mm;
                }
                .img-margin {
                  margin-bottom: 2mm;
                }
                .blue-footer {
                  margin-top: 5mm;
                  font-weight: 700;
                  color: #009FE3;
                }
                .price-block {
                  display: flex;
                  margin-top: 4mm;
                  ${font12()}
                  align-items: center;
                }
                .price-block-price {
                  font-weight: 700;
                  ${font14()}
                  margin-left: 1mm;
                  background-color: #f3e500;
                  padding: 4pt 6pt;
                  border-radius: 5pt;
                }
                .ncpb-video-block {
                  display: flex;
                  flex-wrap: wrap;
                }
                .ncpb-video a {
                  width: 25%;
                  padding: 1mm;
                }
                .ncpb-video img {
                  width: 100%;
                }
                .ncpb-video {
                  margin-top: 5mm;
                }
                .ncpb-note-text {

                }
            </style>
        </head>
        <body>
        <div class="n-com-pdf-block">
        <div class="ncpb-header">
            <img class="ncpb-header-img" src="https://pack-trade.com/n-img/packlogo.svg">
            <div class="ncpb-info-block">
                <div>ФОП Томчук Андрій Михайлович</div>
                <div class="blue-font">Головний офіс: 10007, м. Житомир, вул. Коростишівська, 45</div>
                <div class="blue-font">РНОКПП 3041324133</div>
                <div>тел.: +38 (067) 411-44-10, +38 (0412) 42-88-88</div>
            </div>
        </div>
        <div class="ncpb-manager">
            <div class="pers-manager">Ваш персональний менеджер:</div>
            <div class="name-phone">${stateName}: ${statePhone}</div>
        </div>
        <div class="ncpb-com">Комерційна пропозиція</div>
        <div class="ncpb-name">${dataState.name_ua}</div>
        <div class="ncpb-inv">Код: ${dataState.id}</div>
        <div class="price-block">
          <div class="price-block-title">Ціна з ПДВ -</div>
          <div class="price-block-price">${statePrice}</div>
        </div> 
        <div class="ncpb-img-block">
            <div class="ncpb-main-img">
              <img src="${arrayImages[0].url}">
            </div>
            <div class="ncpb-sub-img">
                <img class="img-margin" src="${arrayImages[1].url}">
                <img src="${arrayImages[2].url}">
            </div>
        </div>
        
        <div class="ncpb-char-block">
          ${pdfCharComponent()}
        </div>
        <div class="ncpb-note">
          <div class="ncpb-note-title">Примітки:</div>
          <div class="ncpb-note-text">${stateNote}</div>
        </div>
      </div>
    </body>
  </html>`
      )}
    const html = htmlContent()
    const permission = await MediaLibrary.requestPermissionsAsync()

    if (permission.granted) {
      try {
        const { uri } = await Print.printToFileAsync({ html, width: 595, height: 843})
        const pdfName = `${uri.slice(0, uri.lastIndexOf('/') + 1 )}${dataState.name_pdf}.pdf`

        await FileSystem.moveAsync ({
          from: uri,
          to: pdfName,
        })
        
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(pdfName)
        setLoadingModal(false)
      } else {
        await MediaLibrary.saveToLibraryAsync(pdfName)
        setLoadingModal(false)
        Alert.alert("Комерційна готова")
      }
      
      } catch(error){
        console.log('PDF Generated ERROR:', error)
        Alert.alert("Помилка при створенні ком. пропозиції")
        setLoadingModal(false)
      }

    } else {
      console.log('Error promissions')
      Alert.alert("Надайте доступ до медіа")
      setLoadingModal(false)
    }
  }

const paddingTop = () => {
  if (Platform.OS === "ios") {
    return 70
  } else {
    return 110
  }
}
const paddingModalTop = () => {
  if (Platform.OS === "ios") {
    return 40
  } else {
    return 20
  }
}

const price = () => {

  const priceCurrency = () => {
      if (dataState.price_currency > 0) {
          return <Text>({dataState.price_currency} {dataState.currency_icon})</Text>
      }
  }
  const priceCurrencySale = () => {
      if (dataState.price_currency > 0) {
          return <Text>({dataState.price_currency_sale} {dataState.currency_icon})</Text>
      }
  }

  if (dataState.price_sale > 0) {
      
      return (
          <View style={{marginBottom: 25}}>
              <Text style={{textDecorationLine: 'line-through', fontSize: 12}}>{dataState.price} грн {priceCurrency()}</Text>
              <Text style={styles.boldText}>{dataState.price_sale} грн {priceCurrencySale()}</Text>
          </View>
      )
  } else {
      return (
          <View style={{marginBottom: 25}}>
              <Text style={styles.boldText}>{dataState.price} грн {priceCurrency()}</Text>
          </View>
      )
  }
}

  return (
    <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1} }>
      <View style={{paddingTop: paddingTop(), flex: 1, paddingHorizontal: 10, paddingBottom: 10, backgroundColor: '#f0f4f5'}}>
      {isLoading ? <ActivityIndicator style={styles.activity} size="large" color="#009fe3"/> : (
        <FlatList
          ListHeaderComponent={() => {

            const charComponent = () => {
              if (dataState.characteristics.length == 0) {
                return <Text>Характеристик немає</Text>
              } else {
                 const arrayChar = dataState.characteristics.map((item, index) => {return <Text style={styles.marginText} key={index}>{item.name}</Text>})
                 return arrayChar
              }
            }

            const descriptionComponent = () => {
              if (dataState.characteristics.length == 0) {
                return <Text>Опису немає</Text>
              } else {
                 return <Text style={styles.description}>{dataState.description}</Text>
              }
            }

            const videoComponent = () => {

              if (dataState.video.length == 0) {
                return <Text>Відео немає</Text>
              } else {
                 const arrayVideo = dataState.video.map((item, index) => {

                  const videoId = item.name

                   return <TouchableOpacity 
                            key={index}
                            accessibilityLabel="Go back"
                            onPress={
                              () => {
                                const supported = Linking.canOpenURL(`https://www.youtube.com/watch?v=${videoId}`)
                                if (supported) {
                                  Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`)
                                } else {
                                  Alert.alert(`Не можливо відкрити це посилання`)
                                }
                            }} 
                            style={styles.imageblock} >
                              <Image
                                style={styles.image}
                                source={{ uri: `https://img.youtube.com/vi/${item.name}/mqdefault.jpg`}}
                              />
                            </TouchableOpacity>})
                 
                 return arrayVideo
              }
            }

            

          const statusProduct = () => {

            if (dataState.price_sale > 0) {
                return <View style={styles.statusProduct}><Text style={styles.statuText}>Акція</Text></View>
            }
            if (dataState.present > 0) {
                return (
                  <View>
                    <View style={styles.statusProduct}><Text style={styles.statuText}>Подарунок</Text></View>
                    <TouchableOpacity
                      onPress={
                        () => {
                          const presentId = {
                            "item" : {
                              id: dataState.present,
                              name_ua: 'Товар в подарунок'
                            }
                          }
                          navigation.push('ProductScreenStack', presentId)
                        }
                      }
                      
                      >
                      <View style={{backgroundColor: '#fff', paddingVertical: 20, paddingHorizontal: 15, borderRadius: 10, marginTop: 10}}>
                        <Ionicons style={{position: 'absolute', right: 5, top: 5}} name="ios-information-circle-outline" size={25} color="#009fe3" />
                        <View style={{marginBottom: 10}}>
                          <View style={{marginBottom: 5, flexDirection: 'row'}}>
                            <Ionicons name="ios-arrow-forward-outline" size={15} color="#009fe3" />
                            <Text style={{paddingLeft: 5}}>При купівлі:</Text>
                          </View>
                          <Text>«{dataState.name_ua}»</Text>
                        </View>
                        <View>
                          <View style={{marginBottom: 5, flexDirection: 'row'}}>
                            <Ionicons name="ios-arrow-forward-outline" size={15} color="#009fe3" />
                            <Text style={{paddingLeft: 5}}>В подарунок:</Text>
                          </View>
                          
                          <Text style={{fontWeight: 'bold'}}>«{dataState.present_name}»</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  
                )
            }
        }

            return (
              <View>
                {statusProduct()}
                <View style={{marginBottom: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="ios-pricetags-outline" size={20} color="#009fe3" />
                  <Text style={{marginLeft: 10}}>Ціна з ПДВ</Text>
                </View>
                {price()}

                <View style={styles.blockitem}>
                  <Text style={styles.marginText}>Інвентарний номер на сайті - {dataState.id}</Text>
                  <Text style={styles.marginText}>Назва - <Text style={{fontWeight: 'bold'}}>{dataState.name_ua}</Text></Text>
                  <Text style={styles.marginText}>Бренд - {dataState.brand}</Text>
                  <Text>Кількість на складі - {dataState.count}</Text>
                </View>
                <View style={styles.blockitem}>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                    <Ionicons name="md-document-text-outline" size={22} color="#009fe3" />
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 10}}>Короткий опис:</Text>
                  </View>
                  {descriptionComponent()}
                </View>
                <View style={styles.blockitem}>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                    <Ionicons name="ios-list-outline" size={22} color="#009fe3" />
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 10}}>Характеристики:</Text>
                  </View>
                  {charComponent()}
                </View>
                <Text style={{marginBottom: 5, fontWeight: '700', fontSize: 15}}>Відео:</Text>
                <View style={styles.container}>{videoComponent()}</View>
                <Text style={{marginBottom: 5, marginTop: 30, fontWeight: '700', fontSize: 15}}>Фото:</Text>
              </View>
            )
          }}
          data={dataState.images}
          keyExtractor={ (item, index) => item + index}
          renderItem={({ item, index }) => (
    
            <TouchableOpacity 
                onPress={()=> {
                  setModal(true)
                  setIndexImage(index)
                }}
                style={styles.imageblock}
            >
                <Image
                    style={styles.image}
                    source={{ uri: item.url}}
                />
            </TouchableOpacity>
          )}
          ListFooterComponent={
            () => {
              return (
                <View>
                  <TouchableOpacity
                  style={[styles.button, {marginTop: 30}]}
                    onPress={()=> {setComModal(true)}} 
                  >
                    <Text style={styles.buttontext}>Згенерувати комерційну</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={[styles.button, {marginBottom: 50}]}
                    onPress={
                      async () => {
                        
                        try {
                          let permission = await MediaLibrary.requestPermissionsAsync()
                              
                            if (permission.granted) {
                              dataState.images.map(
                                   (item, index) => {  FileSystem.downloadAsync(item.url, FileSystem.cacheDirectory + `${dataState.id}-${index}.jpg`).then(item=>MediaLibrary.saveToLibraryAsync(item.uri))
                              })

                              Alert.alert("Всі фото завантажені в галерею")
                            } else {
                              console.log("error")
                            }
                        } catch(e) {
                          console.error("Не можливо скачати файли:", e)
                        }
                      }
                    }
                  >
                    <Text style={styles.buttontext}>Скачати всі фото</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          }
          numColumns={numList}
        />
      )}
      </View>

      <Modal visible={stateComModal} onRequestClose={() => {setComModal(false)}} animationType="slide">
        <TouchableOpacity
        style={{position: 'absolute', right: 10, zIndex: 1000,top: paddingModalTop(), padding: 10}}
            onPress={()=> {setComModal(false)}} 
          >
            <Ionicons name="md-close" size={30} color="black" />
          </TouchableOpacity>
        <View style={{paddingHorizontal: 10, paddingVertical: 100}}>
        <Text style={{marginBottom: 5}}>Ціна по прайсу з ПДВ</Text>
        {price()}
        <TextInput
            placeholder="Ім'я"
            style={styles.input}
            onChangeText={(text) => {
              setName(text)
            }}
        />
        <TextInput 
        style={styles.input}
        placeholder="Номер телефону"
            onChangeText={(text) => {
              setPhone(text)
            }}
        />
        <TextInput 
        placeholder="Ціна"
        style={styles.input}
            onChangeText={(text) => {
              setPrice(text)
            }}
        />
        <TextInput 
        style={styles.input}
        placeholder="Примітки"
            onChangeText={(text) => {
              setNote(text)
            }}
        />
        <TouchableOpacity
        style={styles.button}
          onPress={createAndSavePDF} 
        >
          <Text style={styles.buttontext}>Створити PDF</Text>
        </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={stateModal} transparent={true} onRequestClose={() => {setModal(false)}} animationType="slide">
          <ImageViewer 
              saveToLocalByLongPress={false}
              imageUrls={dataState.images}
              enableSwipeDown={true}
              onCancel={() => {setModal(false)}}
              index={stateIndexImage}
              renderHeader={(props) => {
                return (
                  <View style={styles.iconblock}>
                    <TouchableOpacity
                      style={styles.share}
                      onPress={() => {
                        let linkToImage = dataState.images.find((item, index) => index === props )
                        try {
                            FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${dataState.id}-${props}.jpg`).then(({uri}) => {
                            Sharing.shareAsync(uri)
                          })
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    >
                      <Ionicons name="md-share" size={28} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.download}
                      onPress={async () => {
                        try {
                          let linkToImage = dataState.images.find((item, index) => index === props )
                          let permission = await MediaLibrary.requestPermissionsAsync()
                  
                          if (permission.granted) {
                            await FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${dataState.id}-${props}.jpg`)
                            .then(({uri})=>{
                              MediaLibrary.saveToLibraryAsync(uri).then(
                                Alert.alert("Фото завантаженe в галерею")
                              ).catch(error => console.log(error))
                            }).catch(error => console.log(error))
                            
                          } else {
                            Alert.alert("Недостатньо прав")
                          }
                  
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    ><Ionicons name="md-download" size={28} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity
                      style={styles.cancel}
                      onPress={()=> {setModal(false)}}
                    ><Ionicons name="md-close" size={30} color="#fff" /></TouchableOpacity>
                  </View>
                )
              }}
          />
      </Modal>
      <Modal visible={stateLoadingModal} transparent={true} animationType="slide"><View style={{flex: 1, backgroundColor: '#fff', opacity: 0.9}}><ActivityIndicator style={styles.activity} size="large" color="#009fe3"/></View></Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    activity: {
      flex: 1,
      justifyContent: "center",
    },
    scrollview: {
      flex: 1,
      paddingHorizontal: 10,
      paddingBottom: 10,
      backgroundColor: '#f0f4f5',
    },
    image: {
      width: '100%',
      aspectRatio: 1
    },
    imageblock: {
      width: '33.3%',
      padding: 2
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    iconblock: {
      position: 'absolute',
      zIndex: 1000,
      flex: 1,
      flexDirection: 'row',
      right: 0,
      top: 100
    },
    cancel: {
      width: 50,
      height: 50
    },
    download: {
      width: 50,
      height: 50,
      marginRight: 20
    },
    share: {
      width: 50,
      height: 50,
      marginRight: 20
    }, 
    button: {
      width: '100%',
      backgroundColor: '#009fe3',
      padding: 20,
      marginTop: 15,
      borderRadius: 10,
    },
    buttontext: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
    },
    input: {
      backgroundColor: '#eee',
      marginTop: 15,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 8
    },
    pricemodal: {
      fontSize: 14,
      marginBottom: 10,
    },
    boldText: {
      fontWeight: '700',
      fontSize: 17
    },
    marginText: {
      marginBottom: 8,
    },
    statusProduct: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 3,
      width: 110,
      borderColor: '#009fe3',
      borderWidth: 2
  },
    statuText: {
        color: '#009fe3',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
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
    description: {
      lineHeight: 20
    }
  })
  