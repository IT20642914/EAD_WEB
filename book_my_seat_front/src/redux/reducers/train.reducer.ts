import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants";
import { StationStateDto, TrainStateDto } from "../../utilities/models";

const INITIAL_STATE: TrainStateDto = {
   getAllTrainList:{
    data: [],
    error: null,
    isLoading: false,
    status: null
   }, addTrainDetails:{
    data: {},
    error: null,
    isLoading: false,
    status: null
   }
}
const trainReducer = (state = INITIAL_STATE, action: any) => {
    console.log("first action",action)
    switch (action.type) {
      
        case TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.REQUEST:
          return {
            ...state,
            getAllTrainList: {
              ...state.getAllTrainList,
              isLoading: true,
              status: APP_ACTION_STATUS.LOADING,
              error: null,
              data: null,
            },
          };
        case TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.SUCCESS:
          return {
            ...state,
            getAllTrainList: {
              ...state.getAllTrainList,
              isLoading: false,
              status: APP_ACTION_STATUS.SUCCESS,
              error: null,
              data: action.data,
            },
          };
        case TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.ERROR:
          return {
            ...state,
            getAllTrainList: {
              ...state.getAllTrainList,
              isLoading: false,
              status: APP_ACTION_STATUS.ERROR,
              error: action.error,
              data: [],
            },
          };
        case TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.CLEAR:
          return {
            ...state,
            getAllTrainList: {
              ...state.getAllTrainList,
              isLoading: false,
              status: APP_ACTION_STATUS.INITIAL,
              error: null,
              data: [],
            },
          };
          case TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST:
            return {
              ...state,
              addTrainDetails: {
                ...state.addTrainDetails,
                isLoading: true,
                status: APP_ACTION_STATUS.LOADING,
                error: null,
                data: null,
              },
            };
          case TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS:
            return {
              ...state,
              addTrainDetails: {
                ...state.addTrainDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.SUCCESS,
                error: null,
                data: action.data,
              },
            };
          case TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR:
            return {
              ...state,
              addTrainDetails: {
                ...state.addTrainDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.ERROR,
                error: action.error,
                data: null,
              },
            };
          case TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR:
            return {
              ...state,
              addTrainDetails: {
                ...state.addTrainDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.INITIAL,
                error: null,
                data: null,
              },
            };
          default:
            return state;
        }
}
export default trainReducer;