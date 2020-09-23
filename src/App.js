import React, { Component } from 'react';
import './App.css';
import CellGrid from './components/cellgrid';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="info-container">
          <h1> Conway's Game of Life </h1>
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener"> Link to wiki</a>
          <p> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
          <br />
          <h1> Rules </h1>
          <p> 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation. &nbsp;<br />
                2. Any live cell with two or three live neighbours lives on to the next generation. &nbsp;<br />
                3. Any live cell with more than three live neighbours dies, as if by overpopulation. &nbsp;<br />
                4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. &nbsp;
            </p>
        </div>
        <CellGrid />

      </div>
    );
  }
}

export default App;
