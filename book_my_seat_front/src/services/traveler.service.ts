import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { LoginDto, LoginResponseDto, travelerDto } from "../utilities/models/travellor.model";


const getTravelerList = ():Promise<AxiosResponse<travelerDto[]>> => {
    return axiosPrivateInstance.get(`/api/Traveler`);
}
const addTraveler = (payload:travelerDto):Promise<AxiosResponse<travelerDto[]>> => {
    return axiosPrivateInstance.post(`/api/Traveler`,payload);
}

const getTravelerByID = (payload:string):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.get(`/api/Traveler/getTravelerById?id=${payload}`);
}
const updateTravelerByID = (payload:travelerDto):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.put(`/api/Traveler/UpdateTravelerById?id=${payload.travelerId}`,payload);
}
const DeleteTravelerByID = (payload:string):Promise<AxiosResponse<travelerDto>> => {
    return axiosPrivateInstance.delete(`/api/Traveler/deleteTravelerById?id=${payload}`);
}
const Login = (payload:LoginDto):Promise<AxiosResponse<LoginResponseDto>> => {
    return axiosPrivateInstance.post(`/api/Traveler/Login?nic=${payload.nic}&password=${payload.password}`);
}

export const travelerService = {
    getTravelerList,
    addTraveler,
    getTravelerByID,
    updateTravelerByID,
    DeleteTravelerByID,
    Login,
}