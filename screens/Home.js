import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { ImageBackground } from 'react-native'

export const Home = ({ navigation }) => {
  const data = [
    {
      id: '1',
      text: 'Praca',
      navigate: 'Praca',
      img: require('../assets/images/praca-logo.png'),
    },
    {
      id: '2',
      text: 'Regeneracja',
      navigate: 'Regeneracja',
      img: require('../assets/images/regeneracja-logo.png'),
    },
    {
      id: '3',
      text: 'Relaks',
      navigate: 'Relaks',
      img: require('../assets/images/relaks-logo.png'),
    },
    {
      id: '4',
      text: 'O nas',
      navigate: 'About',
      img: require('../assets/images/o-nas-logo.png'),
      style: {
        backgroundColor: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        minHeight: 300,
        minWidth: 300,
        borderWidth: 10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderRadius: 50,
      },
    },
  ]

  const backgroundSource = require('../assets/images/background.png')

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topSection}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ImageBackground source={backgroundSource} style={styles.backgroundImage}>
        <View style={styles.grid}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                  if (item.navigate) {
                    navigation.navigate(item.navigate)
                  }
                }}
              >
                {item.style ? (
                  <View style={item.style}>
                    <Image source={item.img} style={styles.image} />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </View>
                ) : (
                  <View style={styles.gridItemContent}>
                    <Image source={item.img} style={styles.image} />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  topSection: {
    flex: 0.2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingBottom: 40,
  },
  gridItem: {
    margin: 23,
  },
  backgroundImage: {
    flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    overflow: 'hidden',
    // height: '100%',
  },
  grid: {
    marginTop: 125,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    overflow: 'hidden',
    // flex1: 1,
    // display: 'flex',
    // alignItems: 'center',
    // height: '100%',
    // justifyItems: 'center',
    // flexDirection: 'column',
  },
  gridItemContent: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 300,
    width: 300,
  },
  logo: {
    width: 320,
    height: 150,
  },
  image: {
    aspectRatio: 1,
    width: 150,
    height: 160,
  },
  itemText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
  },
})
