import React, { Component } from 'react';
import './include/Bootstrap';
import './App.scss';
import NavComponent from './components/nav/Nav.component';
import { HomeComponent } from './components/home/Home.component';
import ClickerComponent from './components/clicker/Clicker.component';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignInComponent } from './components/sign-in/SignIn.component';
import ChuckNorrisComponent from './components/chuck-norris/ChuckNorris.container';
import { FirstComponent } from './components/first/First.component';
import { SecondComponent } from './components/second/Second.component';
import { NestedComponent } from './components/nested/Nested.component';
import { TicTacToeComponent } from "./components/tic-tac-toe/TicTacToe.component";
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavComponent />
            <div id="app-content-container">
              <Route path="/home" component={HomeComponent} />
              <Route path="/clicker" component={ClickerComponent} />
              <Route path="/sign-in" component={SignInComponent} />
              <Route path="/chuck-norris" component={ChuckNorrisComponent} />
              <Route path="/tic-tac-toe" component={TicTacToeComponent} />
              <Route path="/first" component={FirstComponent} />
              <Route path="/second" component={SecondComponent} />
              <Route path="/nested" component={NestedComponent} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
