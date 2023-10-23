import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import stationReducer from "./station.reducer";
import trainReducer from "./train.reducer";
import travelerReducer from "./travelers.reducer";
import ticketReducer from "./ticket.reducer";


const rootReducer = combineReducers({
    alert: alertReducer,
    station:stationReducer,
    train:trainReducer,
    traveler:travelerReducer,
    ticket:ticketReducer,
});

export default rootReducer;
