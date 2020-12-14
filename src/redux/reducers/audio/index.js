import audioFile from "./audioFile.js";
import playing from "./playing.js";
import { combineReducers } from "redux";

const audio = combineReducers({ audioFile, playing });

export default audio;
