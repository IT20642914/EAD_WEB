import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, TICKET_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants";
import { TicketReservationDetailsDto, TicketStateDto,  } from "../../utilities/models";


const INITIAL_STATE: TicketStateDto = {
  getAllBookings: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  },
  createBooking: {
    data: [],
    error: null,
    isLoading: false,
    status: null
  },
  getBookingDetails: {
    data: {} as TicketReservationDetailsDto,
    error: null,
    isLoading: false,
    status: null
  },
  updateBooking:{
    data: {} as TicketReservationDetailsDto,
    error: null,
    isLoading: false,
    status: null
  },
  CanceleBooking: {
    data: {} as TicketReservationDetailsDto,
    error: null,
    isLoading: false,
    status: null
  },
}
 const ticketReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {
      
        case TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.REQUEST:
          return {
            ...state,
            getAllBookings: {
              ...state.getAllBookings,
              isLoading: true,
              status: APP_ACTION_STATUS.LOADING,
              error: null,
              data: null,
            },
          };
        case TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.SUCCESS:
          return {
            ...state,
            getAllBookings: {
              ...state.getAllBookings,
              isLoading: false,
              status: APP_ACTION_STATUS.SUCCESS,
              error: null,
              data: action.data,
            },
          };
        case TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.ERROR:
          return {
            ...state,
            getAllBookings: {
              ...state.getAllBookings,
              isLoading: false,
              status: APP_ACTION_STATUS.ERROR,
              error: action.error,
              data: [],
            },
          };
        case TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.CLEAR:
          return {
            ...state,
            getAllBookings: {
              ...state.getAllBookings,
              isLoading: false,
              status: APP_ACTION_STATUS.INITIAL,
              error: null,
              data: [],
            },
          };
          case TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.REQUEST:
          return {
            ...state,
            createBooking: {
              ...state.createBooking,
              isLoading: true,
              status: APP_ACTION_STATUS.LOADING,
              error: null,
              data: null,
            },
          };
        case TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.SUCCESS:
          return {
            ...state,
            createBooking: {
              ...state.createBooking,
              isLoading: false,
              status: APP_ACTION_STATUS.SUCCESS,
              error: null,
              data: action.data,
            },
          };
        case TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.ERROR:
          return {
            ...state,
            createBooking: {
              ...state.createBooking,
              isLoading: false,
              status: APP_ACTION_STATUS.ERROR,
              error: action.error,
              data: [],
            },
          };
        case TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.CLEAR:
          return {
            ...state,
            createBooking: {
              ...state.createBooking,
              isLoading: false,
              status: APP_ACTION_STATUS.INITIAL,
              error: null,
              data: [],
            },
          };
          case TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST:
            return {
              ...state,
              getBookingDetails: {
                ...state.getBookingDetails,
                isLoading: true,
                status: APP_ACTION_STATUS.LOADING,
                error: null,
                data: null,
              },
            };
          case TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.SUCCESS:
            return {
              ...state,
              getBookingDetails: {
                ...state.getBookingDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.SUCCESS,
                error: null,
                data: action.data,
              },
            };
          case TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.ERROR:
            return {
              ...state,
              getBookingDetails: {
                ...state.getBookingDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.ERROR,
                error: action.error,
                data: null,
              },
            };
          case TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.CLEAR:
            return {
              ...state,
              getBookingDetails: {
                ...state.getBookingDetails,
                isLoading: false,
                status: APP_ACTION_STATUS.INITIAL,
                error: null,
                data: null,
              },
            };
            case TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.REQUEST:
              return {
                ...state,
                updateBooking: {
                  ...state.updateBooking,
                  isLoading: true,
                  status: APP_ACTION_STATUS.LOADING,
                  error: null,
                  data: null,
                },
              };
            case TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.SUCCESS:
              return {
                ...state,
                updateBooking: {
                  ...state.updateBooking,
                  isLoading: false,
                  status: APP_ACTION_STATUS.SUCCESS,
                  error: null,
                  data: action.data,
                },
              };
            case TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.ERROR:
              return {
                ...state,
                updateBooking: {
                  ...state.updateBooking,
                  isLoading: false,
                  status: APP_ACTION_STATUS.ERROR,
                  error: action.error,
                  data: null,
                },
              };
            case TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.CLEAR:
              return {
                ...state,
                updateBooking: {
                  ...state.updateBooking,
                  isLoading: false,
                  status: APP_ACTION_STATUS.INITIAL,
                  error: null,
                  data: null,
                },
              };
              case TICKET_ACTION_TYPES.CANCLE_BOOKING + COMMON_ACTION_TYPES.REQUEST:
                return {
                  ...state,
                  CanceleBooking: {
                    ...state.CanceleBooking,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null,
                  },
                };
              case TICKET_ACTION_TYPES.CANCLE_BOOKING + COMMON_ACTION_TYPES.SUCCESS:
                return {
                  ...state,
                  CanceleBooking: {
                    ...state.CanceleBooking,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data,
                  },
                };
              case TICKET_ACTION_TYPES.CANCLE_BOOKING + COMMON_ACTION_TYPES.ERROR:
                return {
                  ...state,
                  CanceleBooking: {
                    ...state.CanceleBooking,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null,
                  },
                };
              case TICKET_ACTION_TYPES.CANCLE_BOOKING + COMMON_ACTION_TYPES.CLEAR:
                return {
                  ...state,
                  CanceleBooking: {
                    ...state.CanceleBooking,
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
export default ticketReducer;