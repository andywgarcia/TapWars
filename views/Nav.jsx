import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View, Text, Modal, Button, Picker, Animated } from "react-native";

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

  const timerRender = timer => {
    if (timer === 3) {
      return "III"
    } else if (timer === 2) {
      return "II"
    } else if (timer === 1) {
      return "I"
    } else {
      return "TAP WARS!!"
    }
  }

  return (
    <Modal transparent visible={props.hidden}>
      <View style={styles.navContainer}>
        <View style={styles.playerOneContainer}>
          {props.playerContainer?
            <TouchableHighlight
              onPress={() => props.cycleDifficulty(PLAYER_ONE)}
              style={styles.playerOneButton} >
              <Text>{playerDifficultyRender(props.playerDifficulty.playerOne)}</Text>
            </TouchableHighlight>: null
          }
        </View>
        <View style={styles.tapWarsContainer}>
          <TouchableHighlight onPress={props.togglePlayerField}
            style={[styles.tapWarsButton, {height: props.startGameBallSize,
            width: props.startGameBallSize}]} >
            <Text>{timerRender(props.startGameText)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.playerTwoContainer}>
          {props.playerContainer?
            <TouchableHighlight onPress={() => props.cycleDifficulty(PLAYER_TWO)}
              style={styles.playerTwoButton} >
              <Text>{playerDifficultyRender(props.playerDifficulty.playerTwo)}</Text>
            </TouchableHighlight>: null
          }
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
    top: "-4.5%",
    right: "1%",
    borderRadius:400,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Nav;
