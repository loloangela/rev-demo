import React, { Component } from "react";
import Button from 'reactstrap/lib/Button';

// interface ITicTacToeDisplayProps {
// }

export class TicTacToeDisplay extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      message: "Let's Play!",
      playerTurn: true, // true p1, false p2
      winner: 0,
      gameOver: false,
      //resetButton: 
    }
  }

  restart() {
    this.setState({
      game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      message: "Let's Play!",
      playerTurn: true, // true p1, false p2
      winner: 0,
      gameOver: false
    });
  }
  private isGameOver() {
    let winner = 0;
    // check rows kinda alright solution
    const isOver = this.state.game.some((row: any) => {
      // console.log('In isOver inner method!');
      const joined = row.join('');
      if (joined === 'XXX') {
        winner = 1;
        return true;
      }
      if (joined === 'OOO') {
        winner = 2
        return true;
      }
      return false;
    });

    if (isOver) {
      return winner;
    }
    if (this.state.winner) {
      return this.state.winner;
    }
    // col check
    for (let i = 0; i < 3; i++) {
      // console.log('Column Check:\n', this.state.game);
      const col = this.state.game[0][i] + this.state.game[1][i] + this.state.game[2][i];
      if (col === 'OOO') {
        return 2;
      }
      if (col === 'XXX') {
        // console.log('We should be here');
        return 1;
      }
    }
    // diagonal checks
    const diag1 = this.state.game[0][0] + this.state.game[1][1] + this.state.game[2][2];
    if (diag1 === 'OOO') {
      return 2;
    }
    if (diag1 === 'XXX') {
      return 1;
    }
    const diag2 = this.state.game[0][2] + this.state.game[1][1] + this.state.game[2][0];
    if (diag2 === 'OOO') {
      return 2;
    }
    if (diag2 === 'XXX') {
      return 1;
    }
    const draw = !this.state.game.some((row: any) => row.filter((tile: any) => tile === '').length > 0);
    if (draw) {
      return -1
    }
    return 0;
  }

  play(row: number, col: number) {
    let temp = this.state.game;
    let pt = this.state.playerTurn;
    let msg = this.state.message;
    let go = this.state.gameOver;

    // Check if spot is populated
    if (!temp[row][col] && !go) {
      if (this.state.playerTurn) {
        temp[row][col] = 'X';
        pt = false;
        msg = 'Player 2';
      } else {
        temp[row][col] = 'O';
        pt = true;
        msg = 'Player 1';
      }

      this.setState({
        game: temp,
        playerTurn: pt,
        message: msg
      });
    }
    let gameResult = this.isGameOver();
    console.log('Game Result: ', gameResult);
    if (gameResult !== 0) {
      if (gameResult > 0) {
        if (gameResult === 1) {
          msg = "Player 1 Wins!";
        } else {
          msg = "Player 2 Wins!";
        }
      } else if (gameResult === -1) {
        msg = "DRAW!";
      }
      go = true;
      this.setState({
        gameOver: go,
        message: msg
      });
    }

  }
  render() {

    return (
      <div>
        <table className="table table-bordered game-board">
          <tbody >
            <tr>
              <td onClick={() => this.play(0, 0)}>{this.state.game[0][0]}</td>
              <td onClick={() => this.play(0, 1)}>{this.state.game[0][1]}</td>
              <td onClick={() => this.play(0, 2)}>{this.state.game[0][2]}</td>
            </tr>
            <tr>
              <td onClick={() => this.play(1, 0)}>{this.state.game[1][0]}</td>
              <td onClick={() => this.play(1, 1)} >{this.state.game[1][1]}</td>
              <td onClick={() => this.play(1, 2)}>{this.state.game[1][2]}</td>
            </tr>
            <tr>
              <td onClick={() => this.play(2, 0)}>{this.state.game[2][0]}</td>
              <td onClick={() => this.play(2, 1)}>{this.state.game[2][1]}</td>
              <td onClick={() => this.play(2, 2)}>{this.state.game[2][2]}</td>
            </tr>
          </tbody>
        </table>
        <div className="controls">
          <h4 id="msg">{this.state.message}</h4>
          <Button id="reset" color="success" onClick={() => this.restart()}>Reset</Button></div>
      </div >
    )
  }
}