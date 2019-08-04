import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InforUserPanel from "./inforUserPanel";
import CountReactPanel from "./countReactPanel";

export default class ResultHeaderComponent extends React.Component {
  render() {
    const { informationUser, result } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around"
        }}
      >
        <InforUserPanel informationUser={informationUser} />
        <CountReactPanel count={informationUser.count} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "600"
            }}
          >
            {result}
          </Text>
        </View>
      </View>
    );
  }
}
