import { AxiosResponse } from "axios"
import { call, put, takeEvery } from 'redux-saga/effects'
import { STATIONS_ACTION_TYPE, COMMON_ACTION_TYPES, TICKET_ACTION_TYPES } from "../../utilities/constants"
import { TicketReservationDetailsDto } from "../../utilities/models"
import { ticketService } from "../../services/ticket.service"

function* getAllBookingDetails(action: { type: string,  }) {
  
    try {
      const Booking: AxiosResponse<TicketReservationDetailsDto[]> = yield call(ticketService.getAllBookingDetails)
      yield put({
        type: TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.SUCCESS,
        data: Booking.data
      })
    } catch (error) {
      yield put({
        type: TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.ERROR,
        error: error
      })
    }
  }

  function* ticketSaga() {
    yield takeEvery(TICKET_ACTION_TYPES.GET_ALL_BOOKING_DETAILS + COMMON_ACTION_TYPES.REQUEST, getAllBookingDetails)
    
  }
  
  export default ticketSaga