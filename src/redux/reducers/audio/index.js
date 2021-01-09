import audioFile from "./audioFile.js";
import playing from "./playing.js";
import playlist from "./playlist.js";

import { combineReducers } from "redux";

const audio = combineReducers({ audioFile, playing, playlist });

export default audio;
