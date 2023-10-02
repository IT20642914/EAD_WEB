import React, { useEffect, useState } from 'react'
import style from './TicketReservationManagementScreen.module.scss'
import { Typography } from '@mui/material'
import { AppLayout } from '../../templates'
import { AlertDto, OptionsDto, TicketReservationDetailsFormDto } from '../../utilities/models'
import { useNavigate } from 'react-router-dom'
import { DetailedInformationTicket, GeneralInformationTicket } from '../../components/TicketReservationManagementScreen'
import { CustomButton } from '../../components/Shared'
import { ALERT_ACTION_TYPES, APP_ROUTES, COMMON_ACTION_TYPES, SeatList, TrainDataset } from '../../utilities/constants'
import { SeatNumber, TainlistDto, schedule, station, trainDetailsDto } from '../../utilities/models/trains.model'
import { alertActions } from '../../redux/action/alert.action'
import { useDispatch } from 'react-redux'

const TicketReservationManagementScreen = () => {



  const TICKET_INFORMATION_FORM_INITIAL_STATE: TicketReservationDetailsFormDto = {
    ticketCount:{ value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
    totalPrice: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    ReservedPesonName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    ReserverNationalID: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    depatureDate: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
    depatureTime:  { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
    arriveTime:  { value:"", isRequired: true, disable: false, readonly: false, validator: "text", error: "",},
    arriveTo:  { value: {} as OptionsDto, isRequired: true, disable: true, readonly: false, validator: "object", error: "",},
    trainName:  { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
    seatNumbers:  { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
    TicketType:  { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "",},
  depatureFrom:{ value: {} as OptionsDto, isRequired: true, disable: true, readonly: false, validator: "object", error: "",},
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [screenMode, setScreenMode] = useState("");
  const [helperText, setHelperText] = useState(true);
  const [TicketInfomationForm, setTicketInfomationForm] = useState(TICKET_INFORMATION_FORM_INITIAL_STATE);
  const [TrainDetails, setTrainDetails] = useState<trainDetailsDto[]>(TrainDataset);
  const [stationList, setstationList] = useState<station[]>([]);
  const [Shedules, setShedules] = useState<schedule[]>([]);
  const [ShedulesUnchange, setShedulesUnchange] = useState<schedule[]>([]);
  const [TrainList, setTrainList] = useState<TainlistDto[]>([]);
  const [SeatData, setSeatData] = useState<SeatNumber[]>(SeatList);
  const [SelectedSeatLis, setSelectedSeatLis] = useState<SeatNumber[]>([]);


  useEffect(() => {
    const trainList:TainlistDto[] = TrainDetails.map((train:trainDetailsDto) => ({
      id: train.id,
      name: train.name,
    }));
    setTrainList(trainList)
  }, [])
  


  const onInputHandleChange = (property: string, value: any) => {
    setHelperText(true);
if(value){
  if(property==="TicketType"){
    setTicketInfomationForm({...TicketInfomationForm,
    TicketType:{...TicketInfomationForm.TicketType,
              value:value }
    })
  }
  if(property==="ticketCount"){
    setTicketInfomationForm({...TicketInfomationForm,
    ticketCount:{...TicketInfomationForm.ticketCount,
              value:value }
    })
  }
  if(property==="ReservedPesonName"){
    setTicketInfomationForm({...TicketInfomationForm,
    ReservedPesonName:{...TicketInfomationForm.ReservedPesonName,
              value:value }
    })
  }
  if(property==="ReserverNationalID"){
    setTicketInfomationForm({...TicketInfomationForm,
    ReserverNationalID:{...TicketInfomationForm.ReserverNationalID,
              value:value }
    })
  }
  if(property==="depatureDate"){
    setTicketInfomationForm({...TicketInfomationForm,
    depatureDate:{...TicketInfomationForm.depatureDate,
              value:value }
    })
  }




// Details Section
if(property==="trainName"){
  const train: trainDetailsDto | undefined  = TrainDetails.find((item:trainDetailsDto) => item.id === value.value);
  if(train){  
    setstationList(train.stations)
    setShedules(train.schedule)
    setShedulesUnchange(train.schedule)
  }
  setTicketInfomationForm({...TicketInfomationForm,
  trainName:{...TicketInfomationForm.trainName,
            value:value },
            arriveTo:{...TicketInfomationForm.arriveTo,
              disable:false
            },
            depatureFrom:{...TicketInfomationForm.depatureFrom,
              disable:false
            }
  })

 
}
if(property==="depatureFrom"){
;
  const shedules=Shedules.filter((item:schedule) => item.stationId === value.value)

  setTicketInfomationForm({...TicketInfomationForm,
  depatureFrom:{...TicketInfomationForm.depatureFrom,
            value:value },
  })
  

  setShedules(shedules)
}
if(property==="arriveTo"){
  if(value.value!==TicketInfomationForm.depatureFrom.value.value){
    setTicketInfomationForm({...TicketInfomationForm,
      arriveTo:{...TicketInfomationForm.arriveTo,
                value:value }
      }) 
  }else{
    setTicketInfomationForm({...TicketInfomationForm,
      arriveTo:{...TicketInfomationForm.arriveTo,
                value:{}as OptionsDto }
      })
    const setAlert: AlertDto = {
      message: "please select a different station",
      type: ALERT_ACTION_TYPES.TRIGGER_ALERT + COMMON_ACTION_TYPES.ERROR,
      options: {
        key: new Date().getTime() + Math.random(),
        varient: 'error'
      }
    }
    dispatch(alertActions.triggerAlert(setAlert));
  }
 
  
}

if(property==="depatureTime"){
  const arriveTime=ShedulesUnchange.filter((item:schedule) => (item.stationId === value.value)&&(item.departureTime === value.label))
  setTicketInfomationForm({...TicketInfomationForm,
  depatureTime:{...TicketInfomationForm.depatureTime,
            value:value },
            arriveTime:{...TicketInfomationForm.arriveTime,
            value:arriveTime[0].arrivalTime}
  })
}
if(property==="seatNumbers"){
  console.log("seatNumbers",value)
  setTicketInfomationForm({...TicketInfomationForm,
  seatNumbers:{...TicketInfomationForm.seatNumbers,
            value:{}as OptionsDto },
  })
  if(SelectedSeatLis.length!=Number(TicketInfomationForm.ticketCount.value.value)){
    SelectedSeatLis.push({id:value.value,name:value.label}) 
    setSeatData(SeatData.filter((item:SeatNumber)=>item.id!==value.value) )
   }

}


}else{
  if(property==="TicketType"){
    setTicketInfomationForm({...TicketInfomationForm,
    TicketType:{...TicketInfomationForm.TicketType,
              value:{}as OptionsDto }
    })
  }
  if(property==="ticketCount"){
    setTicketInfomationForm({...TicketInfomationForm,
    ticketCount:{...TicketInfomationForm.ticketCount,
              value:{}as OptionsDto }
    })
  }
  if(property==="trainName"){
    setTicketInfomationForm({...TicketInfomationForm,
    trainName:{...TicketInfomationForm.trainName,
              value:{}as OptionsDto }
    })
  }
  if(property==="depatureFrom"){
 
    setTicketInfomationForm({...TicketInfomationForm,
    depatureFrom:{...TicketInfomationForm.depatureFrom,
              value:{}as OptionsDto }
    })
  }
  if(property==="arriveTo"){
    setTicketInfomationForm({...TicketInfomationForm,
    arriveTo:{...TicketInfomationForm.arriveTo,
              value:{}as OptionsDto }
    })
  }

}
  
  }

  const handleInputFocus = (property: string, section: string) => {
    if (section === "GI")
    setTicketInfomationForm({
      ...TicketInfomationForm,
      [property]: {
        ...TicketInfomationForm[property as keyof typeof TicketInfomationForm],
        error: null,
      },
    });
    

}


const  createNewRequest=() => {
    
}
const  editRequest=() => {
    
}
const  onClose=() => {
    navigate(APP_ROUTES.TR_MANAGEMENT)
}
const  setAsInitialState=() => {
  setTicketInfomationForm(TICKET_INFORMATION_FORM_INITIAL_STATE)  
}
const removeFrometable=(id:number) =>{
  setSelectedSeatLis(SelectedSeatLis.filter(item=>item.id!==id))
}
  return (
    <React.Fragment>
    <AppLayout componentTitle="New Traveler">
      <section className="page-root">
        <section className={style.sectionCard}>
          <section className={style.sectionCardHeader}>
            <Typography noWrap component="div" className={style.title}>
              <h3>Manage Ticket  Bookings </h3>
            </Typography>
          </section>
          <section className={style.sectionCardBody}>
          <section className={style.stepperRoot}>
  
        
           < GeneralInformationTicket
             helperText={helperText}
             TicketInfomationForm={TicketInfomationForm}
             screenMode={screenMode}
             onInputHandleChange={onInputHandleChange}
             handleInputFocus={handleInputFocus}
           />
            
           <DetailedInformationTicket
           SelectedSeatLis={SelectedSeatLis}
           SeatData={SeatData}
            Shedules={Shedules}
             TrainList={TrainList}
             stationList={stationList}
             helperText={helperText}
             TicketInfomationForm={TicketInfomationForm}
             screenMode={screenMode}
             onInputHandleChange={onInputHandleChange}
             handleInputFocus={handleInputFocus}
             removeFrometable={removeFrometable}
             />


          </section>
          <section className={style.sectionCardFooter}>
                <CustomButton
                  text="Close"
                  textColor="black"
                  bgColor="#bfbfbf"
                  onClick={onClose}
                />
                
                  <>
            
                        <>
                          <CustomButton
                            text="Clear"
                            border="1px solid #6e6e6e"
                            bgColor="#282828"
                            onClick={setAsInitialState}
                          />
                      
                          <CustomButton
                            text="Create Bookings"
                            disabled={false}
                            isLoading={
                             false
                            }
                            onClick={() => createNewRequest()}
                          />
                        </>
                 
                
                    
                        <CustomButton
                          text="Edit Booking"
                          disabled={false}
                          isLoading={false}
                          onClick={editRequest}
                        />
                    
                  </>
            
              </section>
         </section>
         
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TicketReservationManagementScreen