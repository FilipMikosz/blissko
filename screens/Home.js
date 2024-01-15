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
import { ImageBackground } from 'react-native-web'

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
      <ImageBackground
        source={backgroundSource}
        style={{
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.gridContainer}>
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
                <View style={styles.gridItemContent}>
                  <Image source={item.img} style={styles.image} />
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  gridItem: {
    padding: '23px',
  },
  gridItemContent: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 300,
    height: 300,
  },
  logo: {
    width: '320px',
    height: 150,
  },
  image: {
    width: 150,
    height: 200,
  },
  itemText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
