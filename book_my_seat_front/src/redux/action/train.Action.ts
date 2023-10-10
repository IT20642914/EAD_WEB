import { COMMON_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants"
import { traindetailsDto } from "../../utilities/models/trains.model"

const getAllTrainList = () => {
    return {
     
        type: TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.REQUEST,
    }
}
const addTrainDetails = (payload:traindetailsDto) => {
    return {
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
const addTrainDetailsClear = () => {
    return {
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR,
      
    }
}
const getTrainById = (payload:string) => {
    return {
        type: TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
      
    }
}
export const TrainAction = {
    getAllTrainList,
    addTrainDetails,
    addTrainDetailsClear,
    getTrainById

}
