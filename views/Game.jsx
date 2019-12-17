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

function Game() {
  const [score, setScore] = useState(0);

  const showWinnerMessage = winner => {
    Alert.alert(`Player ${winner} Wins`, "", [
      {
        text: "Start Over",
        onPress: () => {
          setScore(0);
        }
      }
    ]);
  };
  if (score <= -36) {
    showWinnerMessage(1);
  } else if (score >= 36) {
    showWinnerMessage(2);
  }

  const onPlayerTap = player => {
    const newScore = playerModifier[player](score);
    setScore(newScore);
  };
  return (
    <React.Fragment>
      <PlayerArea player={0} onTap={onPlayerTap} />
      <PlayerArea player={1} onTap={onPlayerTap} />
      <Dot offset={score * 10} />
    </React.Fragment>
  );
}

export default Game;
