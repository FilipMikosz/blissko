import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";

const backgroundSource = require("../assets/images/background.png");
const burgerLogoSource = require("../assets/images/burger-nav.png");

const { width, fontScale } = Dimensions.get("window");

const data = {
  heading: "O nas",
  section1:
    "Jesteśmy nową marką, która wykorzystuje innowacyjne technologie dla stworzenia kabin akustycznych, które zapewniają komfortowe warunki osobom potrzebującym ciszy.",
  section2:
    "Nasi klienci znajdą w nich zarówno relaks, jak i spokój oraz możliwość skupienia na pracy. Gwarantują izolację w hałaśliwych miejscach publicznych w centrach handlowych, na lotniskach czy dużych firmach.",
};

export const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            position: "absolute",
            top: 60,
            left: 60,
          }}
        >
          <Image
            source={burgerLogoSource}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
            }}
          />
        </TouchableOpacity>

        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <ImageBackground source={backgroundSource} style={styles.backgroundImage}>
        <ScrollView>
          <Text
            style={{
              fontSize: 60,
              fontWeight: "400",
            }}
          >
            {data.heading}
          </Text>
          <Text style={styles.section}>{data.section1}</Text>
          <Text style={styles.section}>{data.section2}</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  topSection: {
    flex: 0.2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingBottom: 55,
  },
  backgroundImage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 50,
    paddingLeft: 70,
    paddingRight: 70,
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    overflow: "hidden",
  },
  section: {
    fontSize: 40 / fontScale,
    fontWeight: "300",
    paddingTop: 30,
  },
  logo: {
    width: 320,
    height: 150,
  },
  burger: {
    width: 50,
    height: 50,
  },
});
