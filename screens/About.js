import { StyleSheet, Text, View } from "react-native";

export const About = () => {
  return (
    <View style={styles.container}>
      <Text>O nas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
