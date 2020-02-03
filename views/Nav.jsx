import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View, Text, Modal, Button, Picker } from "react-native";

const PLAYER_ONE = 'playerOne'
const PLAYER_TWO = 'playerTwo'

function Nav(props) {

  const playerDifficultyRender = difficulty => {
    if (difficulty === 3) {
      return "EASY"
    } else if (difficulty === 2) {
      return "MEDIUM"
    } else {
      return "HARD"
    }
  }

  return (
    <Modal transparent visible={props.hidden}>
      <View style={styles.navContainer}>
        <View style={styles.playerOneContainer}>
          <TouchableHighlight
            onPress={() => props.cycleDifficulty(PLAYER_ONE)}
            style={styles.playerOneButton} >
            <Text>{playerDifficultyRender(props.playerDifficulty.playerOne)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.tapWarsContainer}>
          <TouchableHighlight onPress={props.setHidden}
            style={styles.tapWarsButton} >
            <Text>TAP WARS!</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.playerTwoContainer}>
          <TouchableHighlight onPress={() => props.cycleDifficulty(PLAYER_TWO)}
            style={styles.playerTwoButton} >
            <Text>{playerDifficultyRender(props.playerDifficulty.playerTwo)}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  playerOneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: "180deg" }]
  },
  playerOneButton: {
    padding: 5,
    height: 75,
    width: 75,
    borderRadius:400,
    backgroundColor:'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerTwoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerTwoButton: {
    padding: 5,
    height: 75,
    width: 75,
    borderRadius:400,
    backgroundColor:'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tapWarsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tapWarsButton: {
    padding: 5,
    height: 200,
    width: 200,
    borderRadius:400,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Nav;
