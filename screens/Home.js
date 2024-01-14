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
    { id: '1', text: 'Praca', navigate: 'Praca', img: 'praca-logo' },
    {
      id: '2',
      text: 'Regeneracja',
      navigate: 'Regeneracja',
      img: 'regeneracja-logo',
    },
    { id: '3', text: 'Relaks', navigate: 'Relaks', img: 'relaks-logo' },
    { id: '4', text: 'O nas', navigate: 'About', img: 'o-nas-logo' },
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
                // Handle press, e.g., navigate to the specified screen
                if (item.navigate) {
                  navigation.navigate(item.navigate)
                }
              }}
            >
              <Image
                source={require('../assets/images/' + item.img + '.png')}
                style={{ width: 100, height: 100 }} // Adjust the size as needed
              />
              <Text>{item.text}</Text>
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
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 325,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gridContainer: {
    flex: 1,
    gap: 20,
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    height: 200,
    borderRadius: 20,
  },
})
