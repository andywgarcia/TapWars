import React from "react";
import { StyleSheet, View } from "react-native";
import Game from "./views/Game";

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    flexDirection: "column",
    marginTop: 44,
    marginBottom: 44
  }
});
