
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
export const TicketAction = {
    getAllBookingDetails,
    addBookings,
    addBookingsClear
}