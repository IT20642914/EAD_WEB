import { AxiosResponse } from "axios"
import { station, traindetailsDto } from "../../utilities/models/trains.model"
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
    console.log("saga: addTrainDetails")
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
      yield put({
        type: TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }

  function* trainSaga() {
    yield takeEvery(TRAIN_ACTION_TYPES.GET_ALL_TRAIN_LIST + COMMON_ACTION_TYPES.REQUEST, getAllTrainList)
    yield takeEvery(TRAIN_ACTION_TYPES.ADD_TRAIN_DETAILS + COMMON_ACTION_TYPES.REQUEST, addTrainDetails)
  }
  
  export default trainSaga