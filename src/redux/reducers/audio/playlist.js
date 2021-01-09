const playlist = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PLAYLIST":
      return true;
    case "HIDE_PLAYLIST":
      return false;
    default:
      return state;
  }
};

export default playlist;
