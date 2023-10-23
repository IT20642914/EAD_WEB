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
const getBookingDetailsByid = (payload:string):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.get(`/api/Ticket/GetTicketById?id=${payload}`,);
}
const updateBookings = (payload:TicketReservationDetailsParmDto):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.put(`/api/Ticket/updateTicketById?id=${payload.ReservationID}`,payload);
}
const cancleBookings = (payload:string):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.put(`/api/Ticket/cancleBooking?id=${payload}`);
}



export const ticketService = {
    getAllBookingDetails,
    createBooking,
    getBookingDetailsByid,
    updateBookings,
    cancleBookings,
}