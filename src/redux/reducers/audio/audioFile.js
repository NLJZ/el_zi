const audioFile = (state = ["./audio/helena.mp3"], action) => {
  switch (action.type) {
    case "SET_AUDIO_FILE":
      return action.payload;
    default:
      return state;
  }
};

export default audioFile;
