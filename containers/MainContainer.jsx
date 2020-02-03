import React from "react";
import { View, Text, Modal, Button } from "react-native";
import Nav from '../views/Nav'
import Game from '../views/Game'
import CountDownTimer from '../views/CountDownTimer'

export default class MainContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      navHidden: true,
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

  render() {
    return (
      <React.Fragment>
        <Nav hidden={this.state.navHidden} setHidden={this.setHidden} playerDifficulty={this.state.playerDifficulty} cycleDifficulty={this.cycleDifficulty}/>
        <Game setHidden={this.setHidden} playerDifficulty={this.state.playerDifficulty} />
      </React.Fragment>
    );
  }
}
