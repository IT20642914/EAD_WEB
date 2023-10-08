import { COMMON_ACTION_TYPES, STATIONS_ACTION_TYPE } from "../../utilities/constants"

const getAllStations = () => {
    console.log("actionCalled")
    return {
     
        type: STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.REQUEST,
    }
}
export const StationAction = {
    getAllStations,

}
