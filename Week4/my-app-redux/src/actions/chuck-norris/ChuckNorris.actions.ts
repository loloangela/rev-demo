export const chuckNorrisTypes = {
  BUY_JOKE: 'CHUCK_NORRIS_BUY_JOKE'
}

export const buyJoke = () => async (dispatch) => {
  try {
    const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    const body = await resp.json();

    const joke = body.value.joke;
    dispatch({
      payload: {
        joke
      },
      type: chuckNorrisTypes.BUY_JOKE
    })
  } catch (err) {
    console.log(err);
  }

}