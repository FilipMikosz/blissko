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

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topSection}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

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
              <Image source={item.img} style={styles.image} />
              <Text style={styles.itemText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  gridContainer: {
    // flex: 1,
  },
  gridItem: {
    width: '50%',
    height: '25vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 6,
    padding: 15,
    borderRadius: 30,
  },
  logo: {
    height: 150,
    width: 325,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
})
