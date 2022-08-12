import { combineReducers } from "redux";
import themeReducer from "./themeMode/themeReducer";
import groundReducer from "./groundOutput/groundReducer";

const rootReducer = combineReducers({
    themeReducer,
    groundReducer
});

export default rootReducer;