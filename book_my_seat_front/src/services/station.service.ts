import { AxiosResponse } from "axios"
import { axiosPrivateInstance, axiosPublicInstance } from "."
import { station } from "../utilities/models/trains.model"

const getAllStation = ():  Promise<AxiosResponse<station[]>> => {
    return axiosPublicInstance.get(`/api/Station/GetstationList`)
}
export const StationService = {
    getAllStation,
}