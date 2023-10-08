import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import stationReducer from "./station.reducer";


const rootReducer = combineReducers({
    alert: alertReducer,
    station:stationReducer,
});

export default rootReducer;
