import React from "react";
import { View, Text, Modal, Button } from "react-native";
import Nav from '../views/Nav'
import Game from '../views/Game'
import CountDownTimer from '../views/CountDownTimer'

let timerVar;

export default class MainContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      navHidden: true,
      playerContainer: true,
      startGameText: 'Tap Wars!',
      startGameBallSize: 200,
      playerDifficulty: {
        playerOne: 3,
        playerTwo: 3
      }
    }
  }

  cycleDifficulty = player => {
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

  setTimer = () => {
    if (this.state.startGameText === "Tap Wars!") {
      this.setState({
        startGameText: 3,
        startGameBallSize: this.state.startGameBallSize - 50
      })
    } else if (this.state.startGameText !== "Tap Wars!") {
      this.setState({
        startGameText: this.state.startGameText - 1,
        startGameBallSize: this.state.startGameBallSize - 50
      })
      if (this.state.startGameText === 0) {
        this.setHidden()
        clearInterval(timerVar)
      }
    }
  }

  setNavBeginning = () => {
    this.setState({
      navHidden: true,
      playerContainer: true,
      startGameText: 'Tap Wars!',
      startGameBallSize: 200
    })
  }

  togglePlayerField = () => {
    this.setState({
      playerContainer: !this.state.playerContainer
    })
    timerVar = setInterval(this.setTimer, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <Nav
          hidden={this.state.navHidden}
          setHidden={this.setHidden}
          startGameText={this.state.startGameText}
          startGameBallSize={this.state.startGameBallSize}
          togglePlayerField={this.togglePlayerField}
          playerContainer={this.state.playerContainer}
          playerDifficulty={this.state.playerDifficulty}
          cycleDifficulty={this.cycleDifficulty} />
        <Game
          setNavBeginning={this.setNavBeginning}
          playerDifficulty={this.state.playerDifficulty} />
      </React.Fragment>
    );
  }
}
