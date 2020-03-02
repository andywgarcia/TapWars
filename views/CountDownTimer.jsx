import React, {Component} from "react";
import { TouchableHighlight, View, Text, Modal, Button, Picker } from "react-native";

export default class CountDownTimer extends Component {
  render() {
    return(
      <Modal visible={true}>
        <View>
          <Text>This is the CountDownTimer</Text>
        </View>
      </Modal>
    )
  }
}
