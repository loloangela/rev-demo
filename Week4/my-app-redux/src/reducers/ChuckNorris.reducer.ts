import { IClickerState, IChuckNorrisState } from ".";
import { clickerTypes } from "../actions/clicker/clicker.actions";
import { chuckNorrisTypes } from "../actions/chuck-norris/ChuckNorris.actions";

const initialState: IChuckNorrisState = {
  joke: 'A snake bit chuck norris after 5 painful days the snake died'
}

export const chuckNorrisReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case chuckNorrisTypes.BUY_JOKE:
      return {
        ...state,
        joke: action.payload.joke
      }
  }
  return state;
}