import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, TRAVELER_ACTION_TYPES } from "../../utilities/constants";
import { StationStateDto, TravelerStateDto } from "../../utilities/models";

const INITIAL_STATE: TravelerStateDto = {

    getAllTravelers:{
    data: [],
    error: null,
    isLoading: false,
    status: null
   },
   addTravelers:{
    data: {},
    error: null,
    isLoading: false,
    status: null
   }
}
const travelerReducer = (state = INITIAL_STATE, action: any) => {
    console.log("first action",action)
    switch (action.type) {
      
        case TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.REQUEST:
          return {
            ...state,
            getAllTravelers: {
              ...state.getAllTravelers,
              isLoading: true,
              status: APP_ACTION_STATUS.LOADING,
              error: null,
              data: null,
            },
          };
        case TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.SUCCESS:
          return {
            ...state,
            getAllTravelers: {
              ...state.getAllTravelers,
              isLoading: false,
              status: APP_ACTION_STATUS.SUCCESS,
              error: null,
              data: action.data,
            },
          };
        case TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.ERROR:
          return {
            ...state,
            getAllTravelers: {
              ...state.getAllTravelers,
              isLoading: false,
              status: APP_ACTION_STATUS.ERROR,
              error: action.error,
              data: [],
            },
          };
        case TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.CLEAR:
          return {
            ...state,
            getAllTravelers: {
              ...state.getAllTravelers,
              isLoading: false,
              status: APP_ACTION_STATUS.INITIAL,
              error: null,
              data: [],
            },
          };
          case TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.REQUEST:
            return {
              ...state,
              addTravelers: {
                ...state.addTravelers,
                isLoading: true,
                status: APP_ACTION_STATUS.LOADING,
                error: null,
                data: null,
              },
            };
          case TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.SUCCESS:
            return {
              ...state,
              addTravelers: {
                ...state.addTravelers,
                isLoading: false,
                status: APP_ACTION_STATUS.SUCCESS,
                error: null,
                data: action.data,
              },
            };
          case TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.ERROR:
            return {
              ...state,
              addTravelers: {
                ...state.addTravelers,
                isLoading: false,
                status: APP_ACTION_STATUS.ERROR,
                error: action.error,
                data: null,
              },
            };
          case TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.CLEAR:
            return {
              ...state,
              addTravelers: {
                ...state.addTravelers,
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
export default travelerReducer;