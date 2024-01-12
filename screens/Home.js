import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

export const Home = () => {
  const data = [
    { id: "1", text: "Praca" },
    { id: "2", text: "Regeneracja" },
    { id: "3", text: "Relaks" },
    { id: "4", text: "O nas", navigate: "About" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.logoText}>BLISSKO</Text>
      </View>

      <View style={styles.gridContainer}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gridContainer: {
    flex: 1,
    gap: "20px",
  },
  gridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    height: 200,
    borderRadius: 20,
  },
});
