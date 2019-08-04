import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class ButtonGroup extends React.Component {
  render() {
    const { arrayButton, getUserChoice } = this.props;
    return (
      <View style={styles.buttonGroup}>
        {arrayButton.map(item => {
          return (
            <TouchableOpacity style={styles.buttonStyle} key={item.name}
            onPress={getUserChoice(item.name)}>
              <Text style={styles.textButtonStyle}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around"
  },
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "blue",
    marginVertical: 20
  },
  textButtonStyle: {
    color: "white",
    fontWeight: "800"
  }
});
