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
            alignItem: 'center',
            transform: [{ rotate: "180deg" }]
          }}>
          <TouchableHighlight onPress={() => props.cycleDifficulty(PLAYER_ONE)}
            style={{
              padding: 5,
              height: 75,
              width: 75,
              borderRadius:400,
              backgroundColor:'lightblue',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <View><Text>{playerDifficultyRender(props.playerDifficulty.playerOne)}</Text></View>
          </TouchableHighlight>
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
          <TouchableHighlight onPress={() => props.cycleDifficulty(PLAYER_TWO)}
            style={{
              padding: 5,
              height: 75,
              width: 75,
              borderRadius:400,
              backgroundColor:'lightblue',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <View><Text>{playerDifficultyRender(props.playerDifficulty.playerTwo)}</Text></View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

export default Nav;
