import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";

function Nav(props) {

  return (
    <Modal visible={props.hidden}>
      <View>
        <Text>Welcome To Tap Wars</Text>
      </View>
      <Button title="Start Game" onPress={props.setHidden} />
    </Modal>
  );
}

export default Nav;
