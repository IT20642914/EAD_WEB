import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, TICKET_ACTION_TYPES, TRAIN_ACTION_TYPES } from "../../utilities/constants";
import { TicketStateDto,  } from "../../utilities/models";


const INITIAL_STATE: TicketStateDto = {
    getAllBookings:{
     data: [],
     error: null,
     isLoading: false,
     status: null
    },
    createBooking:{
      data: [],
     error: null,
     isLoading: false,
     status: null
    }
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
          default:
            return state;
        }
}
export default ticketReducer;