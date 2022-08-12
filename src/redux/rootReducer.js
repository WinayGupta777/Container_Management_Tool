import { combineReducers } from "redux";
import themeReducer from "./themeMode/themeReducer";
import groundReducer from "./groundOutput/groundReducer";
import ipReducer from "./ip/ipReducer";

const rootReducer = combineReducers({
    themeReducer,
    groundReducer,
    ipReducer
});

export default rootReducer;