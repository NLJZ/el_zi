export const setAudioFile = (file) => {
  return {
    type: "SET_AUDIO_FILE",
    payload: file,
  };
};

export const setPlaying = (title) => {
  return {
    type: "SET_PLAYING",
    payload: title,
  };
};
