import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import ResultHeaderComponent from "./components/resultComponent";
import PlayingGroup from "./components/playingComponent";
import ButtonGroup from "./components/buttonGroup";

const CHOICES = [
  {
    name: "rock",
    uri: "https://pngimg.com/uploads/stone/stone_PNG13622.png"
  },
  {
    name: "paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png"
  },
  {
    name: "scissors",
    uri:
      "https://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png"
  }
];

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      informationUser: {
        userName: "Dat Nguyen",
        level: "Master",
        count: [
          {
            id: 1,
            type: "Win",
            total: 0,
            percent: 0
          },
          {
            id: 2,
            type: "Tie",
            total: 0,
            percent: 0
          },
          {
            id: 3,
            type: "Defeat",
            total: 0,
            percent: 0
          }
        ],
      },
      content: "",
      result: "",
      userChoice: "",
      computerChoice: "",
      isStart: false,
      totalGame: 0,
    };
  }

  handlerUserChoice = choiceName => () => {
    let { totalGame } = this.state;
    totalGame++;
    let resultShow;
    const newUserChoice = CHOICES.find(choice => choice.name === choiceName);
    const newComputerChoice = CHOICES[Math.floor(Math.random() * 3)];
    const result = this.getRoundOutcome(newComputerChoice, newUserChoice);
    console.log(this.getRoundOutcome(newComputerChoice, newUserChoice));
    const { count } = this.state.informationUser;
    if (result === "win") {
      count[0].total += 1;
      resultShow = "You win";
    } else if (result === "tie") {
      count[1].total += 1;
      resultShow = "Tie game";
    } else if (result === "lose") {
      count[2].total += 1;
      resultShow = "Defeat";
    }

    count[0].percent = parseFloat((count[0].total * 100 / totalGame).toFixed(0));
    count[1].percent = parseFloat((count[1].total * 100 / totalGame).toFixed(0));
    count[2].percent = parseFloat((count[2].total * 100 / totalGame).toFixed(0));

    this.setState({
      totalGame: totalGame,
      userChoice: newUserChoice,
      computerChoice: newComputerChoice,
      result: resultShow,
    });
    // this.setState(prevState => ({
    //   ...prevState,
    //   count: {
    //     ...prevState.informationUser.count,
    //     [prevState.informationUser.count[0].total]: prevState.informationUser.count[0].total + 1
    //   }
    // }));
  };

  getRoundOutcome = (computerChoice, userChoice) => {
    let result;

    if (userChoice.name === "rock") {
      result = computerChoice.name === "scissors" ? "win" : "lose";
    }
    if (userChoice.name === "paper") {
      result = computerChoice.name === "rock" ? "win" : "lose";
    }
    if (userChoice.name === "scissors") {
      result = computerChoice.name === "paper" ? "win" : "lose";
    }

    if (userChoice.name === computerChoice.name) result = "tie";
    return result;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerGroup}>
          <ResultHeaderComponent
            informationUser={this.state.informationUser}
            result={this.state.result}
          />
        </View>

        <View style={styles.playingGroup}>
          {this.state.isStart ? (
            <View style={styles.playingGroup}>
              <PlayingGroup playerName="You" choice={this.state.userChoice} />
              <PlayingGroup
                playerName="Computer"
                choice={this.state.computerChoice}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.sendMessageButton}
              onPress={() =>
                this.setState({
                  isStart: true
                })
              }
            >
              <Text style={{ color: "white", fontSize: 35 }}>START</Text>
            </TouchableOpacity>
          )}
        </View>
        {this.state.isStart && (
          <View styles={styles.buttonGroup}>
            <ButtonGroup
              arrayButton={CHOICES}
              getUserChoice={this.handlerUserChoice}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight
  },
  headerGroup: {
    flex: 0.3
  },
  playingGroup: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonGroup: {
    flex: 0.1
  },
  sendMessageButton: {
    display: "flex",
    height: 100,
    width: 200,
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
