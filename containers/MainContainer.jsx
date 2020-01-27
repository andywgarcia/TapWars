import React from "react";
import { View, Text, Modal, Button } from "react-native";
import Nav from '../views/Nav'
import Game from '../views/Game'

export default class MainContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      navHidden: true,
      playerDifficulty: {
        playerOne: 1,
        playerTwo: 3
      }
    }
  }

  toggleDifficulty = player => {
    if (this.state.playerDifficulty[player] === 1) {
      this.setState({
        playerDifficulty: {
          ...this.state.playerDifficulty,
          [player]: 3
        }
      })
    } else {
      this.setState({
        ...this.state,
        playerDifficulty: {
          ...this.state.playerDifficulty,
          [player]: this.state.playerDifficulty[player] - 1
        }
      })
    }
  }

  setHidden = () => {
    this.setState({
      navHidden: !this.state.navHidden
    })
  }

  render() {
    return (
      <React.Fragment>
        <Nav hidden={this.state.navHidden} setHidden={this.setHidden} playerDifficulty={this.state.playerDifficulty} toggleDifficulty={this.toggleDifficulty}/>
        <Game setHidden={this.setHidden} playerDifficulty={this.state.playerDifficulty} />
      </React.Fragment>
    );
  }
}

// 1 is hardest
// 3 is easiest
// const difficulties = {
//   EASY: "Easy",
//   MEDIUM: "Medium",
//   HARD: "Hard"
// };
//
// const difficultyModifier = {
//   [difficulties.EASY]: 3,
//   [difficulties.MEDIUM]: 2,
//   [difficulties.HARD]: 1
// };
//
// const difficulty = difficulties.EASY;
//
// const playerModifier = {
//   playerOne: (currentDot) => currentDot - difficultyModifier[difficulty],
//   playerTwo: (currentDot) => currentDot + difficultyModifier[difficulty]
// };
