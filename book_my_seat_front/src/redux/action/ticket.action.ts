
import { COMMON_ACTION_TYPES, TICKET_ACTION_TYPES, TRAVELER_ACTION_TYPES } from "../../utilities/constants"
import { TicketReservationDetailsParmDto } from "../../utilities/models"
import { travelerDto } from "../../utilities/models/travellor.model"

const getAllBookingDetails = () => {
    return {
        type: TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.REQUEST,
       
    }
}
const addBookings = (payload:TicketReservationDetailsParmDto) => {
    return {
        type: TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.REQUEST,
        payload:payload,
       
    }
}
const addBookingsClear = () => {
    return {
        type: TICKET_ACTION_TYPES.CREATE_BOOKING + COMMON_ACTION_TYPES.CLEAR,
       
    }
}
const updateBookings = (payload:TicketReservationDetailsParmDto) => {
    return {
        type: TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.REQUEST,
        payload:payload,
       
    }
}
const cancleBookings = (payload:string) => {
    return {
        type: TICKET_ACTION_TYPES.CANCLE_BOOKING + COMMON_ACTION_TYPES.REQUEST,
        payload:payload,
       
    }
}
const GetBookingDetailsByID = (payload:string) => {
    return {
        type: TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST,
        payload:payload,
       
    }
}
const GetBookingDetailsByIDClear = () => {
    return {
        type: TICKET_ACTION_TYPES.GET_BOOKING_DETAILS_BY_ID + COMMON_ACTION_TYPES.CLEAR,
       
       
    }
}
const updateBookingsByIDClear = () => {
    return {
        type: TICKET_ACTION_TYPES.UPDATE_BOOKING + COMMON_ACTION_TYPES.CLEAR,
    }
}
export const TicketAction = {
    getAllBookingDetails,
    addBookings,
    addBookingsClear,
    GetBookingDetailsByID,
    updateBookings,
    cancleBookings,
    GetBookingDetailsByIDClear,
    updateBookingsByIDClear,
}