import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { traindetailsDto } from "../utilities/models/trains.model"

const getAllBookingDetails = ():  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.get(`/api/Ticket/GetTicketbookings`);
}



export const ticketService = {
    getAllBookingDetails
}