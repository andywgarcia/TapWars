import React from "react";
import { StyleSheet, View } from "react-native";
import MainContainer from './containers/MainContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer />
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
