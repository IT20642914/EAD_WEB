import { AxiosResponse } from "axios"
import { station } from "../../utilities/models/trains.model"
import { call, put, takeEvery } from 'redux-saga/effects'
import { STATIONS_ACTION_TYPE, COMMON_ACTION_TYPES } from "../../utilities/constants"
import { StationService } from "../../services/station.service"

function* getAllStation(action: { type: string,  }) {
    console.log("saga: getAllStation")
    try {
      const StationList: AxiosResponse<station[]> = yield call(StationService.getAllStation)
      yield put({
        type: STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.SUCCESS,
        data: StationList.data
      })
    } catch (error) {
      yield put({
        type: STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }


  function* stationSaga() {
    yield takeEvery(STATIONS_ACTION_TYPE.GET_ALL_STATIONS + COMMON_ACTION_TYPES.REQUEST, getAllStation)
    
  }
  
  export default stationSaga