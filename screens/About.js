import { StatusBar } from 'expo-status-bar'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const backgroundSource = require('../assets/images/background.png')
const burgerLogoSource = require('../assets/images/burger-nav.png')

const data = {
  heading: 'O nas',
  section1:
    'Jesteśmy nową marką, która wykorzystuje innowacyjne technologie dla stworzenia kabin akustycznych, które zapewniają komfortowe warunki osobom potrzebującym ciszy.',
  section2:
    'Nasi klienci znajdą w nich zarówno relaks, jak i spokój oraz możliwość skupienia na pracy. Gwarantują izolację w hałaśliwych miejscach publicznych w centrach handlowych, na lotniskach czy dużych firmach.',
}

export const About = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topSection}>
        {/* <Image source={burgerLogoSource} style={styles.burger} /> */}
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ImageBackground source={backgroundSource} style={styles.backgroundImage}>
        <View style={styles.main}>
          <Text
            style={{
              fontSize: 60,
              fontWeight: 450,
            }}
          >
            {data.heading}
          </Text>
          <Text style={styles.section}>{data.section1}</Text>
          <Text style={styles.section}>{data.section2}</Text>
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
    padding: 30,
  },
  backgroundImage: {
    height: '78vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
    paddingLeft: 70,
    paddingRight: 70,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    overflow: 'hidden',
  },
  section: {
    fontSize: 43,
    fontWeight: 250,
    paddingTop: 25,
  },
  logo: {
    width: 320,
    height: 150,
  },
  burger: {
    width: 50,
    height: 50,
  },
})
