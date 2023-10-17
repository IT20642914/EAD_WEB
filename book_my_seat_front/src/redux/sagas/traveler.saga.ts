import { AxiosResponse } from "axios"
import { station } from "../../utilities/models/trains.model"
import { call, put, takeEvery } from 'redux-saga/effects'
import { TRAVELER_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants"
import { StationService } from "../../services/station.service"
import { LoginDto, LoginResponseDto, travelerDto } from "../../utilities/models/travellor.model"
import { travelerService } from "../../services/traveler.service"
import { ToastContainer, toast } from 'react-toastify';
import { Call } from "@mui/icons-material"
function* getAllTravelers(action: { type: string,  }) {
    
    try {
      const List: AxiosResponse<travelerDto[]> = yield call(travelerService.getTravelerList)
      yield put({
        type: TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
    } catch (error) {
      yield put({
        type: TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* addTravelers(action: { type: string, payload:travelerDto }) {

    try {
      const List: AxiosResponse<travelerDto> = yield call(travelerService.addTraveler,action.payload)
      yield put({
        type: TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
    } catch (error) {
      yield put({
        type: TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* getTravelerByID(action: { type: string, payload:string }) {
  
    try {
      const List: AxiosResponse<travelerDto> = yield call(travelerService.getTravelerByID,action.payload)
      yield put({
        type: TRAVELER_ACTION_TYPES.GET_TRAVELER_BY_ID + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
    
    } catch (error) {
      yield put({
        type: TRAVELER_ACTION_TYPES.GET_TRAVELER_BY_ID + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* updateTravelerByID(action: { type: string, payload:travelerDto }) {
  
    try {
      const List: AxiosResponse<travelerDto> = yield call(travelerService.updateTravelerByID,action.payload)
      yield put({
        type: TRAVELER_ACTION_TYPES.UPDATE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
  
    } catch (error) {
      yield put({
        type: TRAVELER_ACTION_TYPES.UPDATE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* deleteTravelerByID(action: { type: string, payload:string }) {
  
    try {
      const List: AxiosResponse<travelerDto> = yield call(travelerService.DeleteTravelerByID,action.payload)
      yield put({
        type: TRAVELER_ACTION_TYPES.DELETE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
    } catch (error) {
      yield put({
        type: TRAVELER_ACTION_TYPES.DELETE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.ERROR,
        error: error
        
      })
    }
  }
  function* Login(action: { type: string, payload:LoginDto }) {
  
    try {
      const List: AxiosResponse<LoginResponseDto> = yield call(travelerService.Login,action.payload)
      yield put({
        type: TRAVELER_ACTION_TYPES.LOGIN + COMMON_ACTION_TYPES.SUCCESS,
        data: List.data
      })
    } catch (error) {
      yield put({
        
        type: TRAVELER_ACTION_TYPES.LOGIN + COMMON_ACTION_TYPES.ERROR,
        error: error
        
      })
    }
  }

  function* travelerSaga() {
    yield takeEvery(TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.REQUEST, getAllTravelers)
    yield takeEvery(TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.REQUEST, addTravelers)
    yield takeEvery(TRAVELER_ACTION_TYPES.GET_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST, getTravelerByID)
    yield takeEvery(TRAVELER_ACTION_TYPES.UPDATE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST, updateTravelerByID)
    yield takeEvery(TRAVELER_ACTION_TYPES.DELETE_TRAVELER_BY_ID + COMMON_ACTION_TYPES.REQUEST, deleteTravelerByID)
    yield takeEvery(TRAVELER_ACTION_TYPES.LOGIN + COMMON_ACTION_TYPES.REQUEST, Login)
  }
  
  export default travelerSaga