import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class PlayingGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { choice } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600"
          }}
        >
          {this.props.playerName}
        </Text>
        <Image
          resizeMode="contain"
          style={styles.choiceImage}
          source={{
            uri: choice.uri
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600"
          }}
        >
          {choice.name}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 50
  },
  playerName: {
    fontWeight: "700"
  },
  choiceImage: {
    width: 130,
    height: 300
  }
});
