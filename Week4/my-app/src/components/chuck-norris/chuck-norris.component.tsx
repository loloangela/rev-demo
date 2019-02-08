import React, { Component } from "react";

export class ChuckNorrisComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      joke: "A snake bit Chuck Norris after 5 painful days the snack died!"
    };
  }

  async componentDidMount() {
    this.newJoke();
  }

  newJoke = async () => {
    try {
      const resp = await fetch("http://api.icndb.com/jokes/random");
      const body = await resp.json();
      this.setState({
        ...this.state,
        joke: body.value.joke
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <div>
          <strong>Joke:</strong> {this.state.joke}
        </div>
        <button className="btn btn-primary" onClick={this.newJoke}>
          New Joke
        </button>
      </div>
    );
  }
}
