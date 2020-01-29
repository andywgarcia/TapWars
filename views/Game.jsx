import React, { useState } from "react";
import PlayerArea from "../components/PlayerArea";
import Dot from "../components/Dot";
import { Alert } from "react-native";

const PLAYER_ONE = 'playerOne'
const PLAYER_TWO = 'playerTwo'

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
    if (player === 'playerOne') {
      setPosition(position - props.playerDifficulty.playerOne);
    } else if (player === 'playerTwo') {
      setPosition(position + props.playerDifficulty.playerTwo);
    }
  };

  return (
    <React.Fragment>
      <PlayerArea player={PLAYER_ONE} onTap={onPlayerTap} />
      <PlayerArea player={PLAYER_TWO} onTap={onPlayerTap} />
      <Dot offset={position * 10} />
    </React.Fragment>
  );

}

export default Game;
