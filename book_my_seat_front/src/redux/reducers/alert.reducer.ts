
import { ALERT_ACTION_TYPES, COMMON_ACTION_TYPES } from '../../utilities/constants'
import { AlertDto, AlertStateDto } from '../../utilities/models'

const INITIAL_STATE: AlertStateDto = {
  notifications: []
}
const alertReducer = (state = INITIAL_STATE, action: AlertDto) => {
  switch (action.type) {
    case ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        notifications: [
          {
            ...state.notifications,
            message: action.message,
            options: {
              key: action.options.key,
              varient: action.options.varient,
              persist: action.options.persist,
              autoHideDuration: action.options.autoHideDuration,
              anchorOrigin: {
                horizontal: action.options.anchorOrigin?.horizontal,
                vertical: action.options.anchorOrigin?.vertical
              }
            }
          }
        ]
      }
    default:
      return state
  }
}
export default alertReducer
