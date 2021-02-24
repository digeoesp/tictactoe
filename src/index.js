import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    //Note
//In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
//All React component classes that have a constructor should start with a super(props) call
    constructor(props) {
        super(props)
        this.state = { // To “remember” things, components use state.
            value: null,
        }
    }
    render() {
    return (
        /// Now we’ll change the Square’s render method to display the current state’s value when clicked
        //By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its <button> is clicked
        //Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up.
        <button className="square" 
        onClick={() => this.setState({value: 'X' })}>
        {this.state.value} 
        </button>
        );
      }
    }


    
  class Board extends React.Component {
    renderSquare(i) { //renders square component and passes i into it
      return <Square value={i} />;//passing some data from our Board component to our Square component.
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  