import React, { useState } from "react";
import { Animated } from "react-native";

function Dot({ offset }) {
  const [dotOffset] = useState(new Animated.Value(0));
  Animated.timing(dotOffset, {
    toValue: offset,
    duration: 100
  }).start();
  return (
    <Animated.View
      style={{
        width: 10,
        height: 10,
        position: "absolute",
        backgroundColor: "white",
        top: "49.5%",
        right: "50%",
        borderRadius: 100,
        transform: [
          {
            translateY: dotOffset
          }
        ]
      }}
    />
  );
}

Dot.defaultProps = {
  offset: 100
};

export default Dot;
