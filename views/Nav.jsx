import React, { useState } from "react";
import { TouchableHighlight, View, Text, Modal, Button, Picker } from "react-native";

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
    <Modal visible={props.hidden}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'light-grey'
      }}>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            transform: [{ rotate: "180deg" }]
          }}>
          <Text>Player 1 Difficulty </Text>
          <Button title={playerDifficultyRender(props.playerDifficulty.playerOne)} onPress={() => props.cycleDifficulty(PLAYER_ONE)} />
          
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItem: 'center'
          }}>
          <TouchableHighlight onPress={props.setHidden}
            style={{
              padding: 5,
              height: 200,
              width: 200,
              borderRadius:400,
              backgroundColor:'red',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <View><Text>Start Game</Text></View>
          </TouchableHighlight>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
          <Text>Player 2 Difficulty </Text>
          <Button title={playerDifficultyRender(props.playerDifficulty.playerTwo)} onPress={() => props.cycleDifficulty(PLAYER_TWO)} />
        </View>
      </View>
    </Modal>
  );
}

export default Nav;
