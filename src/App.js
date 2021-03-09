//Set-up//
import { Component } from "react";
import MoodTracker from "./components/mood-tracker/MoodTracker";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Mood Tracker</h1>

        <MoodTracker />
      </div>
    );
  }
}
