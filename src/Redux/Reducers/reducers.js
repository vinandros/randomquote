import { combineReducers } from "redux";
import QuoteReducer from "../Reducers/Quote.reducer";

const reducers = combineReducers({
    Quote: QuoteReducer
});

export default reducers;