import React from "react";
import { View, Text, Modal, Button } from "react-native";
import Nav from '../views/Nav'
import Game from '../views/Game'

export default class MainContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      navHidden: true
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
        <Nav hidden={this.state.navHidden} setHidden={this.setHidden}/>
        <Game setHidden={this.setHidden}/>
      </React.Fragment>
    );
  }
}


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
  //   0: currentDot => currentDot - difficultyModifier[difficulty],
  //   1: currentDot => currentDot + difficultyModifier[difficulty]
  // };
