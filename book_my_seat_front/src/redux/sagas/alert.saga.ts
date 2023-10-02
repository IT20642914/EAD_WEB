import { put, takeEvery } from 'redux-saga/effects'
import { ALERT_ACTION_TYPES, COMMON_ACTION_TYPES } from '../../utilities/constants'
import { AlertDto } from '../../utilities/models'

function * setAlert (action: AlertDto) {
  const setAlert: AlertDto = {
    type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS,
    message: action.message,
    options: {
      key: action.options.key,
      varient: action.options.varient,
      autoHideDuration: action.options.autoHideDuration,
      persist: action.options.persist,
      anchorOrigin: {
        horizontal: action.options.anchorOrigin?.horizontal,
        vertical: action.options.anchorOrigin?.vertical
      }
    }
  }
  yield put(setAlert)
}

function * alertSaga () {
  yield takeEvery(ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.REQUEST, setAlert)
}

export default alertSaga
