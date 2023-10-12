import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { travelerDto } from "../utilities/models/travellor.model";


const getTravelerList = ():Promise<AxiosResponse<travelerDto[]>> => {
    return axiosPrivateInstance.get(`/api/Traveler`);
}
const addTraveler = (payload:travelerDto):Promise<AxiosResponse<travelerDto[]>> => {
    return axiosPrivateInstance.post(`/api/Traveler`,payload);
}

const getTravelerByID = (payload:string):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.post(`/api/Traveler/${payload}`,);
}
const updateTravelerByID = (payload:string):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.post(`/api/Traveler/${payload}`,);
}
const DeleteTravelerByID = (payload:string):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.post(`/api/Traveler/${payload}`,);
}

export const travelerService = {
    getTravelerList,
    addTraveler,
    getTravelerByID,
}