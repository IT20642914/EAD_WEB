import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import stationReducer from "./station.reducer";
import trainReducer from "./train.reducer";
import travelerReducer from "./travelers.reducer";


const rootReducer = combineReducers({
    alert: alertReducer,
    station:stationReducer,
    train:trainReducer,
    traveler:travelerReducer
});

export default rootReducer;
