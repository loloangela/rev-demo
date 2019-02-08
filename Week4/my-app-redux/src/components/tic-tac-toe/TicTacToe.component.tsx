import React, { Component } from "react";
import { TicTacToeDisplay } from './tic-tac-toe-display/TicTacToeDisplay';

export class TicTacToeComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      message: '',
      playerTurn: true, // true p1, false p2
      winner: 0
    }
  }
  render() {
    return (
      <div>
        <div id="tic-header"><h1>Tic Tac Toe Component</h1></div>
        <TicTacToeDisplay {... this.state.game} />
      </div>
    )
  }
}
