import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { traindetailsDto } from "../utilities/models/trains.model"
import { TicketReservationDetailsParmDto } from "../utilities/models";

const getAllBookingDetails = ():  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.get(`/api/Ticket/GetTicketbookings`);
}
const createBooking = (payload:TicketReservationDetailsParmDto):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.post(`/api/Ticket`,payload);
}



export const ticketService = {
    getAllBookingDetails,
    createBooking
}