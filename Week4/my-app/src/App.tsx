import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./include/Bootstrap";
import { HomeComponent } from "./components/home/home.component";
import { ClickerComponent } from "./components/clicker/clicker.component";
import { BrowserRouter, Route } from "react-router-dom";
import { NavComponent } from "./components/nav/nav.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { TicTacToeComponent } from "./components/tic-tac-toe/tic-tac-toe.component";
import { ChuckNorrisComponent } from "./components/chuck-norris/chuck-norris.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { NestedComponent } from "./components/nested/nested.component";
import { SigninComponent } from "./components/signin/signin.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavComponent />
          <Route path="/home" component={HomeComponent} />
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/first" component={FirstComponent} />
          <Route path="/second" component={SecondComponent} />
          <Route path="/movies" component={MoviesComponent} />
          <Route path="/tic-tac-toe" component={TicTacToeComponent} />
          <Route path="/chuck-norris" component={ChuckNorrisComponent} />
          <Route path="/sign-in" component={SigninComponent} />
          <Route path="/nested" component={NestedComponent} />
          <Route path="/pokemon" component={PokemonComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
