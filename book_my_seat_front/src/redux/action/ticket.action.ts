
import { COMMON_ACTION_TYPES, TICKET_ACTION_TYPES, TRAVELER_ACTION_TYPES } from "../../utilities/constants"
import { travelerDto } from "../../utilities/models/travellor.model"

const getAllBookingDetails = () => {
    return {
        type: TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.REQUEST,
       
    }
}
export const TicketAction = {
    getAllBookingDetails
}