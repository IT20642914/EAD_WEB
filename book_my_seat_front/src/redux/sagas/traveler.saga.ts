import { AxiosResponse } from "axios"
import { station } from "../../utilities/models/trains.model"
import { call, put, takeEvery } from 'redux-saga/effects'
import { TRAVELER_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants"
import { StationService } from "../../services/station.service"
import { travelerDto } from "../../utilities/models/travellor.model"
import { travelerService } from "../../services/traveler.service"

function* getAllTravelers(action: { type: string,  }) {
    console.log("saga: getAllStation")
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
    console.log("saga: getAllStation")
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


  function* travelerSaga() {
    yield takeEvery(TRAVELER_ACTION_TYPES.GET_ALL_TRAVELER_LIST + COMMON_ACTION_TYPES.REQUEST, getAllTravelers)
    yield takeEvery(TRAVELER_ACTION_TYPES.ADD_TRAVELER + COMMON_ACTION_TYPES.REQUEST, addTravelers)
    
  }
  
  export default travelerSaga