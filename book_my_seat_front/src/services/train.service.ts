import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { getAvilibleTrainParamDto, traindetailsDto } from "../utilities/models/trains.model"


const addTrainDetails = (payload:traindetailsDto):  Promise<AxiosResponse<any[]>> => {
    return axiosPrivateInstance.post(`/api/Train`,payload);
}
const getAllTrainDetails = ():  Promise<AxiosResponse<traindetailsDto[]>> => {
    return axiosPrivateInstance.get(`/api/Train/GetTrainList`);
}
const getTrainDetailsById = (payload:string):  Promise<AxiosResponse<traindetailsDto>> => {
    return axiosPrivateInstance.get(`api/Train/GetTrainByID?id=${payload}`);
}
const updatetrainDetailsByid = (payload:traindetailsDto):  Promise<AxiosResponse<traindetailsDto>> => {
    return axiosPrivateInstance.put(`api/Train/UpdateTrainDetailsById?id=${payload.trainId}`,payload);
}
const deletetrainDetailsByid = (payload:string):  Promise<AxiosResponse<traindetailsDto>> => {   
     return axiosPrivateInstance.delete(`api/Train/DeleteById?id=${payload}`);
}
const getAvilibleTrains = (payload:getAvilibleTrainParamDto):  Promise<AxiosResponse<traindetailsDto>> => {   
    return axiosPrivateInstance.get(`/api/Train/GetAvilibleTrainList?departueStationId=${payload.departueStationId}&arriveStationId=${payload.arriveStationId}`);
}
export const trainService = {
    addTrainDetails,
    getAllTrainDetails,
    getTrainDetailsById,
    updatetrainDetailsByid,
    deletetrainDetailsByid,
    getAvilibleTrains
}