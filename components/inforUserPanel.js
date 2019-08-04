import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

export default class InforUserPanel extends Component {
  render() {
    const { informationUser } = this.props;
    return (
      <View style={styles.profileGroup}>
        <View style={styles.imageProfile}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri:
                "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/50474496_168480847447061_7589339720363016192_n.jpg?_nc_cat=104&_nc_oc=AQnzT8USEQJgbXSF_J_Ve2USQHn-QIL-Fv5ASgCulW58bBB5sC8eTpRbdWhc4NktnAQ&_nc_ht=scontent.fsgn3-1.fna&oh=e8d0d6f34843f329a1869da8f1e59a31&oe=5DEDD7D5"
            }}
          />
        </View>
        <View style={styles.detailProfile}>
          <View style={styles.informationGroup}>
            <Text style={{ fontSize: 26 }}>{informationUser.userName}</Text>
            <Text style={{ fontSize: 18, color: "grey", paddingVertical: 10 }}>
              Level: {informationUser.level}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileGroup: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  imageProfile: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  detailProfile: {
    flex: 3,
    justifyContent: "center"
  },
  informationGroup: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 40
  },
  followButton: {
    flex: 0.7,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: FOLLOW_COLOR,
    shadowColor: FOLLOW_COLOR,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  sendMessageButton: {
    display: "flex",
    height: 31,
    width: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SEND_MESSAGE_COLOR,
    shadowColor: SEND_MESSAGE_COLOR,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  }
});
