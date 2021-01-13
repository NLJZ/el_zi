const player = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PLAYER":
      return true;
    case "HIDE_PLAYER":
      return false;
    default:
      return state;
  }
};

export default player;
