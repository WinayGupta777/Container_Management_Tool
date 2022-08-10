import { combineReducers } from "redux";
import themeReducer from "./themeMode/themeReducer";

const rootReducer = combineReducers({
    themeReducer
});

export default rootReducer;