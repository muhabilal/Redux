import { combineReducers } from "redux";
import AmountReducers from "./AmountReducers";
const reducers = combineReducers({
    amount: AmountReducers
})
export default reducers