//Class Based Components//
import { Component } from "react";
import MoodPoints from "../mood-points/MoodPoints";

export default class MoodTracker extends Component {
  //   //constructor// this is the BOOMER WAY
  //   constructor(props) {
  //     //invoke super first!
  //     //get functionality from Component
  //     super(props);
  //     this.state = {
  //       points: 10,
  //     };
  //   }

  //class field declaration method of defining state
  state = {
    points: 11,
  };

  //events handlers//
  handleIncreaseMood = () => {
    this.setState(
      (prevState) => {
        return {
          points: prevState.points + 1,
        };
      },
      () => console.log(this.state)
    );
  };
  handleDecreaseMood = () => {
    this.setState(
      (prevState) => {
        return {
          points: prevState.points - 1,
        };
      },
      () => console.log(this.state)
    );
  };

  //render//
  render() {
    return (
      <div>
        <MoodPoints points={this.state.points} />

        <button onClick={this.handleIncreaseMood}>😁</button>
        <button onClick={this.handleDecreaseMood}>☹️</button>
      </div>
    );
  }
}
