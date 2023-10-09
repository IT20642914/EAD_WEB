import { COMMON_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants"

const getAllTrainList = () => {
    return {
     
        type: TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.REQUEST,
    }
}
export const TrainActionTypes = {
    getAllTrainList,

}
