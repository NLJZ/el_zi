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

export const showPlaylist = () => {
  return {
    type: "SHOW_PLAYLIST",
  };
};

export const hidePlaylist = () => {
  return {
    type: "HIDE_PLAYLIST",
  };
};

export const showPlayer = () => {
  return {
    type: "SHOW_PLAYER",
  };
};

export const hidePlayer = () => {
  return {
    type: "HIDE_PLAYER",
  };
};
