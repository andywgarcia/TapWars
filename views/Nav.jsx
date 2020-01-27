import React, { useState } from "react";
import { View, Text, Modal, Button, Picker } from "react-native";

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
      <View>
        <Text>Welcome To Tap Wars</Text>
      </View>
      <View>
        <Text>Player 1 Difficulty = {playerDifficultyRender(props.playerDifficulty.playerOne)} </Text>
        <Button title="Set P1 Difficulty" onPress={() => props.toggleDifficulty('playerOne')} />
      </View>
      <View>
        <Text>Player 2 Difficulty = {playerDifficultyRender(props.playerDifficulty.playerTwo)}</Text>
        <Button title="Set P2 Difficulty" onPress={() => props.toggleDifficulty('playerTwo')} />
      </View>
      <Button title="Start Game" onPress={props.setHidden} />
    </Modal>
  );
}

export default Nav;


// <Picker
//   selectedValue={this.state.language}
//   style={{height: 50, width: 100}}
//   onValueChange={(itemValue, itemIndex) =>
//     this.setState({language: itemValue})
//   }>
//   <Picker.Item label="Java" value="java" />
//   <Picker.Item label="JavaScript" value="js" />
// </Picker>
