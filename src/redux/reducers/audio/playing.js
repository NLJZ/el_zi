const playing = (state = "", action) => {
  switch (action.type) {
    case "SET_PLAYING":
      return action.payload;
    default:
      return state;
  }
};

export default playing;
