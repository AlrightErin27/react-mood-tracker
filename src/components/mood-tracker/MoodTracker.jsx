//Class Based Components//
import { Component } from "react";
import MoodPoints from "../mood-points/MoodPoints";
import MoodNote from "../mood-note/MoodNote";
import placeholderNotes from "./placeholderNotes";

export default class MoodTracker extends Component {
  //constructor//
  //class field declaration method of defining state
  state = {
    points: 10,
    noteInput: "",
    noteData: [],
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
  handleInputChange = (e) => {
    this.setState(
      {
        noteInput: e.target.value,
      },
      () => console.log(this.state)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => {
        const newNoteData = {
          note: prevState.noteInput,
          date: new Date().toLocaleDateString(),
          points: prevState.points,
        };
        return {
          // noteData: prevState.noteData.push(newNoteData),/////DO NOT USE PUSH HERE!!!
          //USE STRING CONCATENATION!!!//
          // noteData: prevState.noteData.concat([newNoteData]),
          //USE SPREAD OPERATOR//
          noteData: [...prevState.noteData, newNoteData],
        };
      },
      () => this.setState({ noteInput: "" })
    );
  };
  //render//
  render() {
    const noteComponents = this.state.noteData.map((placeholderNote, index) => {
      return (
        <MoodNote
          key={`note ${index}`}
          points={placeholderNote.points}
          date={placeholderNote.date}
          note={placeholderNote.note}
        />
      );
    });
    return (
      <div>
        <MoodPoints points={this.state.points} />
        <button onClick={this.handleIncreaseMood}>😁</button>{" "}
        <button onClick={this.handleDecreaseMood}>☹️</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="note-input">New Note:</label>
          <input
            id="note-input"
            type="text"
            placeholder="how are you feeling?"
            onChange={this.handleInputChange}
            value={this.state.noteInput}
          />
          <input type="submit" value="Save Note" />
        </form>
        <h3>My Notes:</h3>
        {noteComponents}
      </div>
    );
  }
}
