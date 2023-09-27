import {
  ALERT_ACTION_TYPES, COMMON_ACTION_TYPES
} from '../../utilities/constants'
import { AlertDto } from '../../utilities/models'

const triggerAlert = (notification: AlertDto) => {
  const alertAction: AlertDto = {
    type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.REQUEST,
    message: notification.message,
    options: {
      key: new Date().getTime() + Math.random(),
      varient: notification.options.varient,
      persist: notification.options.persist,
      autoHideDuration: notification.options.autoHideDuration,
      anchorOrigin: {
        horizontal: notification.options.anchorOrigin?.horizontal,
        vertical: notification.options.anchorOrigin?.vertical
      }
    }
  }
  return alertAction
}

export const alertActions = {
  triggerAlert
}
