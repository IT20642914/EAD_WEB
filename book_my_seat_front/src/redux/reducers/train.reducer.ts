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
   },getDetailsById:{
    data: {},
    error: null,
    isLoading: false,
    status: null

   },
   updatetrainDetailsByid:{
    data: {},
    error: null,
    isLoading: false,
    status: null

   },
   deleteTrainDetailsByid:{
    data: {},
    error: null,
    isLoading: false,
    status: null

   },
   getAvilibletrains:{
    data: [],
    error: null,
    isLoading: false,
    status: null
   }
  ,
  getTripDetails:{
    data: [],
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
            case TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST:
              return {
                ...state,
                getDetailsById: {
                  ...state.getDetailsById,
                  isLoading: true,
                  status: APP_ACTION_STATUS.LOADING,
                  error: null,
                  data: null,
                },
              };
            case TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.SUCCESS:
              return {
                ...state,
                getDetailsById: {
                  ...state.getDetailsById,
                  isLoading: false,
                  status: APP_ACTION_STATUS.SUCCESS,
                  error: null,
                  data: action.data,
                },
              };
            case TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.ERROR:
              return {
                ...state,
                getDetailsById: {
                  ...state.getDetailsById,
                  isLoading: false,
                  status: APP_ACTION_STATUS.ERROR,
                  error: action.error,
                  data: null,
                },
              };
            case TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.CLEAR:
              return {
                ...state,
                getDetailsById: {
                  ...state.getDetailsById,
                  isLoading: false,
                  status: APP_ACTION_STATUS.INITIAL,
                  error: null,
                  data: null,
                },
              };
              case TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST:
                return {
                  ...state,
                  updatetrainDetailsByid: {
                    ...state.updatetrainDetailsByid,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null,
                  },
                };
              case TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS:
                return {
                  ...state,
                  updatetrainDetailsByid: {
                    ...state.updatetrainDetailsByid,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data,
                  },
                };
              case TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR:
                return {
                  ...state,
                  updatetrainDetailsByid: {
                    ...state.updatetrainDetailsByid,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null,
                  },
                };
              case TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR:
                return {
                  ...state,
                  updatetrainDetailsByid: {
                    ...state.updatetrainDetailsByid,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null,
                  },
                };
                case TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST:
                  return {
                    ...state,
                    deleteTrainDetailsByid: {
                      ...state.deleteTrainDetailsByid,
                      isLoading: true,
                      status: APP_ACTION_STATUS.LOADING,
                      error: null,
                      data: null,
                    },
                  };
                case TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS:
                  return {
                    ...state,
                    deleteTrainDetailsByid: {
                      ...state.deleteTrainDetailsByid,
                      isLoading: false,
                      status: APP_ACTION_STATUS.SUCCESS,
                      error: null,
                      data: action.data,
                    },
                  };
                case TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR:
                  return {
                    ...state,
                    deleteTrainDetailsByid: {
                      ...state.deleteTrainDetailsByid,
                      isLoading: false,
                      status: APP_ACTION_STATUS.ERROR,
                      error: action.error,
                      data: null,
                    },
                  };
                case TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.CLEAR:
                  return {
                    ...state,
                    deleteTrainDetailsByid: {
                      ...state.deleteTrainDetailsByid,
                      isLoading: false,
                      status: APP_ACTION_STATUS.INITIAL,
                      error: null,
                      data: null,
                    },
                  };
                  case TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.REQUEST:
                    return {
                      ...state,
                      getAvilibletrains: {
                        ...state.getAvilibletrains,
                        isLoading: true,
                        status: APP_ACTION_STATUS.LOADING,
                        error: null,
                        data: null,
                      },
                    };
                  case TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.SUCCESS:
                    return {
                      ...state,
                      getAvilibletrains: {
                        ...state.getAvilibletrains,
                        isLoading: false,
                        status: APP_ACTION_STATUS.SUCCESS,
                        error: null,
                        data: action.data,
                      },
                    };
                  case TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.ERROR:
                    return {
                      ...state,
                      getAvilibletrains: {
                        ...state.getAvilibletrains,
                        isLoading: false,
                        status: APP_ACTION_STATUS.ERROR,
                        error: action.error,
                        data: [],
                      },
                    };
                  case TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.CLEAR:
                    return {
                      ...state,
                      getAvilibletrains: {
                        ...state.getAvilibletrains,
                        isLoading: false,
                        status: APP_ACTION_STATUS.INITIAL,
                        error: null,
                        data: [],
                      },
                    };

                    case TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.REQUEST:
                      return {
                        ...state,
                        getTripDetails: {
                          ...state.getTripDetails,
                          isLoading: true,
                          status: APP_ACTION_STATUS.LOADING,
                          error: null,
                          data: null,
                        },
                      };
                    case TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.SUCCESS:
                      return {
                        ...state,
                        getTripDetails: {
                          ...state.getTripDetails,
                          isLoading: false,
                          status: APP_ACTION_STATUS.SUCCESS,
                          error: null,
                          data: action.data,
                        },
                      };
                    case TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.ERROR:
                      return {
                        ...state,
                        getTripDetails: {
                          ...state.getTripDetails,
                          isLoading: false,
                          status: APP_ACTION_STATUS.ERROR,
                          error: action.error,
                          data: [],
                        },
                      };
                    case TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.CLEAR:
                      return {
                        ...state,
                        getTripDetails: {
                          ...state.getTripDetails,
                          isLoading: false,
                          status: APP_ACTION_STATUS.INITIAL,
                          error: null,
                          data: [],
                        },
                      };
          default:
            return state;
        }
}
export default trainReducer;