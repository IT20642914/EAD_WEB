
import { COMMON_ACTION_TYPES, TRAVELER_ACTION_TYPES } from "../../utilities/constants"
import { travelerDto } from "../../utilities/models/travellor.model"

const getAllTravelers = () => {
    console.log("actionCalled")
    return {

        type: TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.REQUEST,
    }
}

const addTravelers = (payload:travelerDto) => {
    return {
        type: TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
export const TravelersAction = {
    getAllTravelers,
    addTravelers

}

