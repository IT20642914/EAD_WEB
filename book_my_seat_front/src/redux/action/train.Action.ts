import { COMMON_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants"
import { getAvilibleTrainParamDto, traindetailsDto } from "../../utilities/models/trains.model"

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
const UpdateTainByID = (payload:string) => {
    return {
        type: TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
      
    }
}
const trainEditeByid = (payload:traindetailsDto) => {
    return {
        type: TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
    }
}
const getTrainByIdClear =()=>{
    return {
        type: TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.CLEAR,
     
    }
}
const DeleteTrainById =(payload:string)=>{
    return {
        type: TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
     
    }
}
const DeleteTrainByIdCler =()=>{
    return {
        type: TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR,
    
     
    }
}
const trainEditeByidClear = () => {
    return {
        type: TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR,
   
    }
}
const getAvilibleTrain = (payload:getAvilibleTrainParamDto) => {
    return {
        type: TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.REQUEST,
        payload:payload
   
    }
}
export const TrainAction = {
    getAllTrainList,
    addTrainDetails,
    addTrainDetailsClear,
    getTrainById,
    DeleteTrainById,
    getTrainByIdClear,
    trainEditeByid,
    UpdateTainByID,
    DeleteTrainByIdCler,
    trainEditeByidClear,
    getAvilibleTrain,

}
