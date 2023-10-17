
import { COMMON_ACTION_TYPES, TRAVELER_ACTION_TYPES } from "../../utilities/constants"
import { LoginDto, travelerDto } from "../../utilities/models/travellor.model"

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

const travelerByID = (payload:string) => {
    return {
        type: TRAVELER_ACTION_TYPES.GET_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
const UpdateTraveler = (payload:travelerDto) => {
    return {
        type: TRAVELER_ACTION_TYPES.UPDATE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
const DeleteTraveler = (payload:string) => {
    return {
        type: TRAVELER_ACTION_TYPES.DELETE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
const addTravelersClear = () => {
    return {
        type: TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.CLEAR,
     
    }
}
const travelerByIDClear = () => {
    return {
        type: TRAVELER_ACTION_TYPES.GET_TRAVELER_BY_ID + COMMON_ACTION_TYPES.CLEAR,
     
    }
}
const travelerUpdateByIDClear = () => {
    return {
        type: TRAVELER_ACTION_TYPES.UPDATE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.CLEAR,
     
    }
}
const DeleteTravelerByIDClear = () => {
    return {
        type: TRAVELER_ACTION_TYPES.DELETE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.CLEAR,
     
    }
}
const Login = (payload:LoginDto) => {
    return {
        type: TRAVELER_ACTION_TYPES.LOGIN + COMMON_ACTION_TYPES.REQUEST,
        payload: payload
     
    }
}


export const TravelersAction = {
    getAllTravelers,
    addTravelers,
    travelerByID,
    UpdateTraveler,
    DeleteTraveler,
    addTravelersClear,
    travelerByIDClear,
    travelerUpdateByIDClear,
    DeleteTravelerByIDClear,
    Login,
    

}

