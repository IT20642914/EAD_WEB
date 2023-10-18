import React, { useEffect, useState } from 'react'
import style from './TicketReservationManagementScreen.module.scss'
import { Typography } from '@mui/material'
import { AppLayout } from '../../templates'
import { AlertDto, ApplicationStateDto, OptionsDto, TicketReservationDetailsDto, TicketReservationDetailsFormDto, TicketReservationDetailsParmDto,  } from '../../utilities/models'
import { useNavigate } from 'react-router-dom'
import { DetailedInformationTicket, GeneralInformationTicket } from '../../components/TicketReservationManagementScreen'
import { CustomButton } from '../../components/Shared'
import { ALERT_ACTION_TYPES, APP_ACTION_STATUS, APP_ROUTES, COMMON_ACTION_TYPES, SeatList, TRAIN_SCREEN_MODES, TrainDataset, Train_Ticket_Classes } from '../../utilities/constants'
import { SeatNumber, TainlistDto, getAvilibleTrainDto, getAvilibleTrainParamDto, schedule, station, trainDetailsDto, trainDetailsGridDto } from '../../utilities/models/trains.model'
import { alertActions } from '../../redux/action/alert.action'
import { useDispatch, useSelector } from 'react-redux'
import { StationAction } from '../../redux/action/station.Action'
import { validateFormData } from '../../utilities/helpers'
import { TrainAction } from '../../redux/action/train.Action'

const TicketReservationManagementScreen = () => {



  const TICKET_INFORMATION_FORM_INITIAL_STATE: TicketReservationDetailsFormDto = {
    ticketCount: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    totalPrice: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    ReservedPesonName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    ReserverNationalID: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    depatureDate: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    depatureTime: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arriveTime: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    arriveTo: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    trainName: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    seatNumbers: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    TicketType: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    depatureFrom: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arriveDistance: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    dipatureDistance:  { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [screenMode, setScreenMode] = useState("");
  const [helperText, setHelperText] = useState(true);
  const [TicketInfomationForm, setTicketInfomationForm] = useState(TICKET_INFORMATION_FORM_INITIAL_STATE);
  const [TrainDetails, setTrainDetails] = useState<trainDetailsDto[]>(TrainDataset);
  
  const [Shedules, setShedules] = useState<schedule[]>([]);

  const [TrainList, setTrainList] = useState<TainlistDto[]>([]);
  const [SeatData, setSeatData] = useState<SeatNumber[]>(SeatList);
  const [SelectedSeatLis, setSelectedSeatLis] = useState<SeatNumber[]>([]);
  const [avilibletrains, setavilibletrains] = useState<getAvilibleTrainDto[]>([])
  const [Stations, setStations] = useState<station[]>([]);
  
  const StationList = useSelector((state: ApplicationStateDto) => state.station.getAllStation);
  const AvilibleTrainsResponse = useSelector((state: ApplicationStateDto) => state.train.getAvilibletrains);

  useEffect(() => {
    dispatch(StationAction.getAllStations());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
useEffect(() => {
if(StationList.status===APP_ACTION_STATUS.SUCCESS){
  setStations(StationList.data)
}
}, [StationList.status])

useEffect(() => {
 const payload:getAvilibleTrainParamDto={
   departueStationId:TicketInfomationForm.depatureFrom?.value?.value?.toString(),
   arriveStationId: TicketInfomationForm.arriveTo?.value?.value?.toString()
 }
  dispatch(TrainAction.getAvilibleTrain(payload));

}, [TicketInfomationForm.depatureFrom.value,TicketInfomationForm.arriveTo.value])


 

  useEffect(() => {
if(AvilibleTrainsResponse.status===APP_ACTION_STATUS.SUCCESS){
  setavilibletrains(AvilibleTrainsResponse.data)
  const trainList= AvilibleTrainsResponse.data.map(train => ({
    id:train.trainId,
    name: train.trainName,
  }));
  setTrainList(trainList)
}

  },[AvilibleTrainsResponse.status])

  useEffect(() => {

    if(TicketInfomationForm.TicketType.value.value){
      const price =calculateTicketPrice(TicketInfomationForm.depatureFrom.value,TicketInfomationForm.arriveTo.value)
      setTicketInfomationForm({...TicketInfomationForm,
                  totalPrice:{...TicketInfomationForm.totalPrice,
                  value:price},
               
        }) 

      
    }
   
  }, [TicketInfomationForm.TicketType.value.value,TicketInfomationForm.ticketCount.value.value])
  


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
 console.log("value",value)
  const selectedTrain=  avilibletrains.filter(tr => tr.trainId===value.value)
  console.log("avilibletrains",avilibletrains)
  if (selectedTrain.length > 0 && selectedTrain[0].trainShedule) {
   // Access the trainShedule property
   const schedule = selectedTrain[0].trainShedule;
   console.log(schedule,"scheduleschedule")
   setShedules(schedule)
   // Now you can use the 'schedule' data
 } else {
   // Handle the case when 'selectedTrain' or 'trainShedule' is undefined
 }
  setTicketInfomationForm({...TicketInfomationForm,
  trainName:{...TicketInfomationForm.trainName,
            value:value },
          
         
  })

 
}
if(property==="depatureFrom"){

  setTicketInfomationForm({...TicketInfomationForm,
  depatureFrom:{...TicketInfomationForm.depatureFrom,
            value:value },
           
  })
  


}
if(property==="arriveTo"){
  if(value.value!==TicketInfomationForm.depatureFrom.value.value){

    const price =calculateTicketPrice(TicketInfomationForm.depatureFrom.value,value)
    console.log("price",price)
    setTicketInfomationForm({...TicketInfomationForm,
      arriveTo:{...TicketInfomationForm.arriveTo,
                value:value },
                totalPrice:{...TicketInfomationForm.totalPrice,
                value:price},
             
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
  console.log("Shedules" ,value)
  const arriveTime = Shedules.filter((item: schedule) => (item.stationId === value.value) );
console.log("arriveTime",arriveTime)
if (arriveTime.length > 0) {
  setTicketInfomationForm({
    ...TicketInfomationForm,
    depatureTime: {
      ...TicketInfomationForm.depatureTime,
      value: value
    },
    arriveTime: {
      ...TicketInfomationForm.arriveTime,
      value: arriveTime[0].arrivalAt
    }
  });
} else {
  // Handle the case where no matching 'arriveTime' is found in 'Shedules'.
  // You may want to set a default value or display an error message.
}
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


const  createNewRequest=async () => {
  const [validateData, isValid] = await validateFormData(TicketInfomationForm);
  setTicketInfomationForm(validateData);
  if (isValid) {


const payload:TicketReservationDetailsParmDto={
  ticketCount: Number(TicketInfomationForm.ticketCount.value.value),
  totalPrice: TicketInfomationForm.totalPrice.value,
  ReservedPesonName: TicketInfomationForm.ReservedPesonName.value,
  ReserverNationalID: TicketInfomationForm.ReserverNationalID.value,
  depatureFrom: {
    stationId:TicketInfomationForm.depatureFrom.value.value.toString(),
    stationName:TicketInfomationForm.depatureFrom.value.label,
  },
  depatureDate: TicketInfomationForm.depatureDate.value.value.toString(),
  depatureTime: TicketInfomationForm.depatureTime.value.value.toString(),
  arriveTime: TicketInfomationForm.arriveTime.value,
  arriveTo: { 
    stationId:TicketInfomationForm.arriveTo.value.value.toString(),
  stationName:TicketInfomationForm.arriveTo.value.label,},
  trainName: TicketInfomationForm.trainName.value.label,
  TicketType: {
    ticketTypeID:TicketInfomationForm.TicketType.value.value.toString(),
    ticketTypeName:TicketInfomationForm.TicketType.value.label,
  },
  arriveDistance:TicketInfomationForm.arriveDistance.value,
  dipatureDistance: TicketInfomationForm.dipatureDistance.value
}



  }
    
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

const calculateTicketPrice = (departureFrom:OptionsDto,arriveTo:OptionsDto) => {
  const distanceA= Shedules.filter(shedules=>shedules.stationId==departureFrom.value)
  const distanceB= Shedules.filter(shedules=>shedules.stationId==arriveTo.value)

  let difference = 0;

  if (distanceA.length > 0 && distanceB.length > 0) {
    const distanceAValue = distanceA[0].distanceFromStartPoint; // Assuming distance is a property in your schedule objects
    const distanceBValue = distanceB[0].distanceFromStartPoint;
    difference = Math.abs(distanceBValue - distanceAValue);
  }
  
  console.log("difference",difference)
  console.log("ticketType",TicketInfomationForm.TicketType.value.value,departureFrom,arriveTo)
  let basePrice:number =10
  let ratePerKM:number= 0.05
  
  if(TicketInfomationForm.TicketType.value.value===1){
    basePrice=25
    ratePerKM=0.01
  }
  if(TicketInfomationForm.TicketType.value.value===2){
    basePrice=15
    ratePerKM=0.08
  }
 
 const ticketCount:number=Number(TicketInfomationForm.ticketCount.value.value)||1
const ticketPrice =( basePrice + difference * ratePerKM)*ticketCount;

  return ticketPrice;
};
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
             stationList={Stations}
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
                 {screenMode !== TRAIN_SCREEN_MODES.VIEW && (
                  <>
              {sessionStorage.getItem("Mode") ===
                      TRAIN_SCREEN_MODES.CREATE && (
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
                 )}
                
                {sessionStorage.getItem("Mode") ===
                      TRAIN_SCREEN_MODES.EDIT && (
                        <CustomButton
                          text="Edit Booking"
                          disabled={false}
                          isLoading={false}
                          onClick={editRequest}
                        />
                        )}
                  </>
              )}
              </section>
         </section>
         
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TicketReservationManagementScreen