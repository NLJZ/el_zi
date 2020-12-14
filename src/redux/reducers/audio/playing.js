const playing = (state = false, action) => {
  switch (action.type) {
    case "SET_PLAYING":
      return true;
    default:
      return state;
  }
};

export default playing;
