import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import stationReducer from "./station.reducer";
import trainReducer from "./train.reducer";


const rootReducer = combineReducers({
    alert: alertReducer,
    station:stationReducer,
    train:trainReducer
});

export default rootReducer;
