import { AxiosResponse } from "axios"
import { getAvilibleTrainParamDto, station, traindetailsDto } from "../../utilities/models/trains.model"
import { call, put, takeEvery } from 'redux-saga/effects'
import { TRAIN_ACTION_TYPES, COMMON_ACTION_TYPES, ALERT_ACTION_TYPES } from "../../utilities/constants"
import { StationService } from "../../services/station.service"
import { trainService } from "../../services/train.service"
import { AlertDto } from "../../utilities/models"

function* getAllTrainList(action: { type: string,  }) {
    console.log("saga: getAllTrainList")
    try {
      const trainDetails: AxiosResponse<traindetailsDto[]> = yield call(trainService.getAllTrainDetails)
      yield put({
        type: TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
    } catch (error) {
      yield put({
        type: TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* addTrainDetails(action: { type: string, payload:traindetailsDto  }) {
    try {
      const trainDetails: AxiosResponse<any> = yield call(trainService.addTrainDetails,action.payload)
      yield put({
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
      const setAlert: AlertDto = {
        message: trainDetails.data,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'success'
        }
      }
      yield put(setAlert)
    } catch (error) {
      const setAlert: AlertDto = {
        message: error as string,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'error'
        }
      }
      yield put(setAlert)
      yield put({
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* getTrainDetailsByID(action: { type: string, payload:string  }) {
    try {
      const trainDetails: AxiosResponse<any> = yield call(trainService.getTrainDetailsById,action.payload)
      yield put({
        type: TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
      const setAlert: AlertDto = {
        message: trainDetails.data,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'success'
        }
      }
      yield put(setAlert)
    } catch (error) {
      const setAlert: AlertDto = {
        message: error as string,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'error'
        }
      }
      yield put(setAlert)
      yield put({
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* updaeTrainDetailsByid(action: { type: string, payload:traindetailsDto  }) {
    try {
      const trainDetails: AxiosResponse<any> = yield call(trainService.updatetrainDetailsByid,action.payload)
      yield put({
        type: TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
      const setAlert: AlertDto = {
        message: trainDetails.data,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'success'
        }
      }
      yield put(setAlert)
    } catch (error) {
      const setAlert: AlertDto = {
        message: error as string,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'error'
        }
      }
      yield put(setAlert)
      yield put({
        type: TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* deleteTrainDetailsByid(action: { type: string, payload:string  }) {
    try {
      const trainDetails: AxiosResponse<any> = yield call(trainService.deletetrainDetailsByid,action.payload)
      yield put({
        type: TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
      const setAlert: AlertDto = {
        message: trainDetails.data,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'success'
        }
      }
      yield put(setAlert)
    } catch (error) {
      const setAlert: AlertDto = {
        message: error as string,
        type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
        options: {
          key: new Date().getTime() + Math.random(),
          varient: 'error'
        }
      }
      yield put(setAlert)
      yield put({
        type: TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }

  function* getAvilibleTrains(action: { type: string,payload:getAvilibleTrainParamDto }) {
   
    try {
      const trainDetails: AxiosResponse<traindetailsDto[]> = yield call(trainService.getAvilibleTrains,action.payload)
      yield put({
        type: TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
    } catch (error) {
      yield put({
        type: TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* getTripDetails(action: { type: string }) {
   
    try {
      const trainDetails: AxiosResponse<any[]> = yield call(trainService.getTripDetails)
      yield put({
        type: TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.SUCCESS,
        data: trainDetails.data
      })
    } catch (error) {
      yield put({
        type: TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }
  function* trainSaga() {
    yield takeEvery(TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.REQUEST, getAllTrainList)
    yield takeEvery(TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST, addTrainDetails)
    yield takeEvery(TRAIN_ACTION_TYPES.GET_TRAIN_DETAILS_BY_ID + COMMON_ACTION_TYPES.REQUEST, getTrainDetailsByID)
    yield takeEvery(TRAIN_ACTION_TYPES.EDIT_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST, updaeTrainDetailsByid)
    yield takeEvery(TRAIN_ACTION_TYPES.DELETE_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST, deleteTrainDetailsByid)
    yield takeEvery(TRAIN_ACTION_TYPES.GET_AVILIBLE_TRAINS + COMMON_ACTION_TYPES.REQUEST, getAvilibleTrains)
    yield takeEvery(TRAIN_ACTION_TYPES.Get_TripDetails + COMMON_ACTION_TYPES.REQUEST, getTripDetails)

  }
  
  export default trainSaga