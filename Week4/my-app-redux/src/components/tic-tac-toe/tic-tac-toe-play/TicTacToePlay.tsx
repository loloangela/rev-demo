import React from "react";

interface ITicTacToePlay {
  game: Array<Array<string>>,
  playerTurn: boolean,
  winner: number,
  msg: ''
}

export class TicTacToePlay extends React.Component<ITicTacToePlay, any> {

}