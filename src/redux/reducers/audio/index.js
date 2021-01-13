import audioFile from "./audioFile.js";
import playing from "./playing.js";
import playlist from "./playlist.js";
import player from "./player.js";

import { combineReducers } from "redux";

const audio = combineReducers({ player, audioFile, playing, playlist });

export default audio;
