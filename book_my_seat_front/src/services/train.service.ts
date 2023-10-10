import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { traindetailsDto } from "../utilities/models/trains.model"


const addTrainDetails = (payload:traindetailsDto):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.post(`/api/Train`,payload);
}
const getAllTrainDetails = ():  Promise<AxiosResponse<traindetailsDto[]>> => {
    return axiosPrivateInstance.get(`/api/Train/GetTrainList`);
}
const getTrainDetailsById = (payload:string):  Promise<AxiosResponse<traindetailsDto[]>> => {
    return axiosPrivateInstance.get(`api/Train/GetTrainByID?id=${payload}`);
}
export const trainService = {
    addTrainDetails,
    getAllTrainDetails,
    getTrainDetailsById
}