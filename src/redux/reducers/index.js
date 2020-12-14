import { combineReducers } from "redux";
import audioFile from "./audioFile";
import playing from "./playing";

const rootReducer = combineReducers({ audioFile, playing });

export default rootReducer;
