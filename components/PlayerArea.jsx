import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";

const playerColors = {
  0: "gray",
  1: "darkgray",
  2: "lightgray"
};

function PlayerArea({ onTap, player }) {
  const [tapCount, setTapCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        height: 50,
        backgroundColor: playerColors[player]
      }}
    >
      <View
        style={{
          height: "100%",
          //   justifyContent: "center",
          alignItems: "center"
        }}
        onTouchStart={() => {
          onTap(player);
          setTapCount(tapCount + 1);
        }}
      >
        {player === 1 ? <View style={{ flex: 7 }} /> : <></>}
        <View
          style={{
            width: "100%",
            height: 10,
            backgroundColor: "black",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              transform: [{ rotate: player === 0 ? "180deg" : "0deg" }]
            }}
          >
            {/* {tapCount} */}
            Goal
          </Text>
        </View>
        {player !== 1 ? <View style={{ flex: 7 }} /> : <></>}
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          position: "absolute",
          top: 50,
          alignSelf: "stretch"
        }}
      />
    </View>
  );
}

PlayerArea.defaultProps = {
  player: 0,
  onTap: () => {}
};

export default PlayerArea;
