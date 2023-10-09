import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, STATIONS_ACTION_TYPE } from "../../utilities/constants";
import { StationStateDto } from "../../utilities/models";

const INITIAL_STATE: StationStateDto = {
   getAllStation:{
    data: [],
    error: null,
    isLoading: false,
    status: null
   }
}
const stationReducer = (state = INITIAL_STATE, action: any) => {
    console.log("first action",action)
    switch (action.type) {
      
        case STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.REQUEST:
          return {
            ...state,
            getAllStation: {
              ...state.getAllStation,
              isLoading: true,
              status: APP_ACTION_STATUS.LOADING,
              error: null,
              data: null,
            },
          };
        case STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.SUCCESS:
          return {
            ...state,
            getAllStation: {
              ...state.getAllStation,
              isLoading: false,
              status: APP_ACTION_STATUS.SUCCESS,
              error: null,
              data: action.data,
            },
          };
        case STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.ERROR:
          return {
            ...state,
            getAllStation: {
              ...state.getAllStation,
              isLoading: false,
              status: APP_ACTION_STATUS.ERROR,
              error: action.error,
              data: null,
            },
          };
        case STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.CLEAR:
          return {
            ...state,
            getAllStation: {
              ...state.getAllStation,
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
export default stationReducer;