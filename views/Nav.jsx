import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";

function Nav() {
  const [hidden, setHidden] = useState(false)

  return (
    <Modal  visible={hidden}>
      <View>
        <Text>Welcome To Tap Wars</Text>
      </View>
      <Button title="Start Game" onPress={() => setHidden(true)}/>
    </Modal>
  );
}

export default Nav;
