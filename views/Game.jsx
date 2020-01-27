import React, { useState } from "react";
import PlayerArea from "../components/PlayerArea";
import Dot from "../components/Dot";
import { Alert } from "react-native";

const difficulties = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard"
};

const difficultyModifier = {
  [difficulties.EASY]: 3,
  [difficulties.MEDIUM]: 2,
  [difficulties.HARD]: 1
};

const difficulty = difficulties.EASY;

const playerModifier = {
  0: currentDot => currentDot - difficultyModifier[difficulty],
  1: currentDot => currentDot + difficultyModifier[difficulty]
};

function Game(props) {
  const [position, setPosition] = useState(0);

  const showWinnerMessage = winner => {
    Alert.alert(`Player ${winner} Wins`, "", [
      {
        text: "Start Over",
        onPress: () => {
          setPosition(0);
        }
      },
      {
        text: "Back To Nav",
        onPress: () => {
          setPosition(0)
          props.setHidden();
        }
      }
    ]);
  };


  if (position <= -36) {
    showWinnerMessage(1);
  } else if (position >= 36) {
    showWinnerMessage(2);
  }

  const onPlayerTap = player => {
    const newPosition = playerModifier[player](position);
    setPosition(newPosition);
  };

  return (
    <React.Fragment>
      <PlayerArea player={0} onTap={onPlayerTap} />
      <PlayerArea player={1} onTap={onPlayerTap} />
      <Dot offset={position * 10} />
    </React.Fragment>
  );

}

export default Game;
