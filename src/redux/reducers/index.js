import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";

const errors = (state = null, action) => state;
const movies = (state = [], action) => state;

const rootReducers = combineReducers({
  errors: errorReducer,
  movies:movieReducer
});

export default rootReducers;
